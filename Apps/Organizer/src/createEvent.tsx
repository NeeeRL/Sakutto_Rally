import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { preEventData } from './types/event'

const getInitialValue = (key: string) => {
    const stored = localStorage.getItem("eventData")
    if (!stored) {
        return null
    }

    try {
        const parsedData = JSON.parse(stored)
        const value = parsedData[key]

        if(value === "true" || value === true) return true
        if(value === "false" || value === false) return false        
        if (typeof value === "object" && value.length === 0) return ""

        return value ? value : ""
    }
    catch (event) {
        console.error("JSON is not formatted", event)
    }
}

//初期値取得，なければ作成
const openIDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open("images", 1)

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result
            if (!db.objectStoreNames.contains("images")) {
                db.createObjectStore("images", {keyPath: "key"})
            }
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}
const saveIDB = async (key: string, file: File) => {
    const db = await openIDB()

    return new Promise<void>((resolve, reject) => {
        const tx = db.transaction("images", "readwrite")
        const store = tx.objectStore("images")

        const request = store.put({key, file})

        request.onsuccess = () => resolve()
        request.onerror = () => reject(request.error)
    })
}
const getIDB = async (key: string): Promise<File | null> => {
    const db = await openIDB()

    return new Promise((resolve, reject) => {
        const tx = db.transaction("images", "readonly")
        const store = tx.objectStore("images")

        const request = store.get(key)

        request.onsuccess = () => {
            const result = request.result
            resolve(result ? result.file : null)
        }
        request.onerror = () => reject(request.error)
    })
}

const createEvent = () => {

    const [ eventName, setEventName ] = useState<string>(getInitialValue("eventName") ?? "")
    const [ rootURL, setRootURL ] = useState<string>(getInitialValue("rootURL") ?? "")
    const [ startDate, setStartDate ] = useState<string>((getInitialValue("startDate")) ?? "")
    const [ endDate, setEndDate ] = useState<string>(getInitialValue("endDate") ?? "")
    //ここはboolなのでチェックしない
    const [ isClearSound, setIsClearSound ] = useState<boolean>(getInitialValue("isClearSound") ?? false)
    // mapは画像
    const [ map, setMap ] = useState<string>("")
    const [ description, setDescription ] = useState<string>(getInitialValue("description") ?? "")
    // thumbnailは画像
    const [ thumbnail, setThumbnail ] = useState<string>("")
    // clearImageは画像
    const [ clearImage, setClearImage ] = useState<string>("")
    const [ clearMessage, setClearMessage ] = useState<string>(getInitialValue("clearMessage") ?? "")

    const checkPoints = (getInitialValue("checkPoints") ?? "")

    const allInput = !!(eventName.length && rootURL.length >= 2 && startDate && endDate && description.length && map && thumbnail && clearImage && clearMessage.length && checkPoints.length && map && thumbnail && clearImage)

    const sayAllInput = () => {
        alert("すべて入力してください")
    }

    // const [ saveIcon, setSaveIcon ] = useState("M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9")

    const saveInput = () => {

        const newData: preEventData = {
            eventName: eventName,
            rootURL: rootURL.slice(-1) === "/" ? rootURL : ( rootURL.length === 0 ? "" : rootURL + "/" ),
            startDate: startDate,
            endDate: endDate,
            description: description,
            isClearSound: isClearSound,
            clearMessage: clearMessage,
            checkPoints: getInitialValue("checkPoints")
        }
        localStorage.setItem("eventData", JSON.stringify(newData))
        // console.log("上書き後", newData)
    }

    const uploadIDB = (name: string) => {
        return async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0]
            if (!file) return
            await saveIDB(name, file)

            //ここで画像の場所を指定
            if (name === "map"){
                setMap(URL.createObjectURL(file))
            } else if (name === "thumbnail") {
                setThumbnail(URL.createObjectURL(file))
            } else if (name === "clearImage"){
                setClearImage(URL.createObjectURL(file))
            }
        }
    }

    // const saveChangeIcon = () => {
    //     setSaveIcon("m4.5 12.75 6 6 9-13.5")
    //     saveInput()
    //     setTimeout(() => {
    //         setSaveIcon("M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9")
    //     }, 3000)
    // }

    //チェックできるようにだけしておく
    const checkStartDate = (date: string) => {
        setStartDate(date)
    }

    //ここは絶対チェック
    const checkEndDate = (date: string) => {
        if(startDate){
            const start = new Date(startDate)
            const end = new Date(date)    
            const today = new Date()

            const normalize = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
            const s = normalize(start)
            const e = normalize(end)
            const t = normalize(today)

            if(e < s || e < t){
                alert("日付が無効です")
            }
            else{
                setEndDate(date)
            }
        }

    }
        
    useEffect(() => {
        (async () => {
            const mapFile = await getIDB("map")
            const thumbnailFile = await getIDB("thumbnail")
            const clearImageFile = await getIDB("clearImage")
            if (mapFile) setMap(URL.createObjectURL(mapFile))
            if (thumbnailFile) setThumbnail(URL.createObjectURL(thumbnailFile))
            if (clearImageFile) setClearImage(URL.createObjectURL(clearImageFile))
        })()
    }, [])
    
    return(
        <>
            <Header text="イベント情報の設定" to="/"/>
            
            <div className="w-full flex justify-center items-center flex-col mb-30">
                <div className="w-9/10">
                    <div className="flex">
                        <Link 
                            to="/create"
                            onClick={saveInput}
                            className="w-[calc(50%-1px)] bottom-0 font-bold text-center py-2 rounded-t-xl mt-4 block border-gray-300 border-1 border-b-0 mx-1"
                        >
                            1.イベント情報
                        </Link>
                        <Link 
                            to="/checkpoints"
                            onClick={saveInput}
                            className="w-[calc(50%-1px)] bottom-0 font-bold text-gray-500/50 text-center py-2 rounded-t-xl mt-4 block bg-gray-100/50 border-gray-300 border-1 border-b-0 mx-1"
                        >
                            2.チェックポイント
                        </Link>
                    </div>
                    <label htmlFor="eventName" className="mt-4 mb-2 block">イベントの名前</label>
                    <input 
                        id="eventName" 
                        value={eventName}
                        onChange={ (event) => setEventName(event.target.value) }
                        onBlur={saveInput}
                        type="text" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                        placeholder="イベントの名称を入力"
                    />
                    <label htmlFor="rootURL" className="mt-4 mb-2 block">ルートURL</label>
                    <input 
                        id="rootURL" 
                        value={rootURL}
                        // 最後が/ならそのまま，ないなら強制的に追加
                        onChange={ (event) => setRootURL(event.target.value) }
                        onBlur={saveInput}
                        type="text" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                        placeholder="例)https://example.com/"
                    />
                    <label htmlFor="startDate" className="mt-6 my-2 block">イベント開始日</label>
                    <input 
                        id="startDate" 
                        value={startDate}
                        onChange={ (event) => checkStartDate(event.target.value) }
                        onBlur={saveInput}
                        type="date" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />
                    <label htmlFor="endDate" className="mt-6 my-2 block">イベント最終日</label>
                    <input 
                        id="endDate" 
                        value={endDate}
                        onChange={ (event) => checkEndDate(event.target.value) }
                        onBlur={saveInput}
                        type="date" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />                
                    <div>
                        <label htmlFor="thumbnail" className="mt-6 my-2 block">
                            トップ画像のアップロード
                        </label>
                        <input 
                            id="thumbnail" 
                            type="file" 
                            accept="image/*"
                            onChange={uploadIDB("thumbnail")}
                            className="hidden"
                        />
                        <label
                            htmlFor="thumbnail"
                            className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none block"
                        >
                            {
                            thumbnail ? 
                            <span className="flex">
                                別の画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span> :
                            <span className="flex">
                                トップページに表示される画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span>
                            }
                        </label>
                        {thumbnail ? <img src={thumbnail} alt="thumbnail preview" className="mt-2 rounded-lg"/> : ""}
                    </div>
                    <label htmlFor="description" className="mt-6 my-2 block">概要</label>
                    <textarea 
                        id="description" 
                        value={description}
                        onChange={ (event) => setDescription(event.target.value) }
                        onBlur={saveInput}
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                        placeholder="イベントの概要を入力"
                    />
                    <div>
                        <label htmlFor="map" className="mt-6 my-2 block">地図画像のアップロード</label>
                        <input 
                            id="map" 
                            type="file" 
                            accept="image/*"
                            onChange={uploadIDB("map")}
                            className="hidden"
                        />
                        <label
                            htmlFor="map"
                            className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none block"
                        >

                            {
                            map ? 
                            <span className="flex">
                                別の画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span> :
                            <span className="flex">
                                マップページに表示される画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span>
                            }
                        </label>
                        {map ? <img src={map} alt="map preview" className="mt-2 rounded-lg" /> : ""}
                    </div>
                    <div className="flex mt-6 my-2 items-center">
                        <input 
                            id="isClearSound" 
                            checked={isClearSound}
                            onChange={ (event) => setIsClearSound(event.target.checked) }
                            onBlur={saveInput}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                        />
                        <label htmlFor="isClearSound" className="block">&nbsp;スタンプ獲得時に効果音を再生する</label>
                    </div>
                    <div>
                        <label htmlFor="clearImage" className="mt-6 my-2 block">クリア時に表示される画像のアップロード</label>
                        <input 
                            id="clearImage" 
                            type="file" 
                            accept="image/*"
                            onChange={uploadIDB("clearImage")}
                            className="hidden"
                        />
                        <label
                            htmlFor="clearImage"
                            className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none block"
                        >

                            {
                            clearImage ? 
                            <span className="flex">
                                別の画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span> :
                            <span className="flex">
                                クリアページに表示される画像を選択
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 block ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </span>
                            }
                        </label>
                        {clearImage ? <img src={clearImage} alt="clearImage preview" className="mt-2 rounded-lg" /> : ""}
                    </div>
                    <label htmlFor="clearMessage" className="mt-6 my-2 block">クリア時のメッセージ</label>
                    <textarea 
                        id="clearMessage" 
                        value={clearMessage}
                        onChange={ (event) => setClearMessage(event.target.value) }
                        onBlur={saveInput}
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                        placeholder="イベントの概要を入力"
                    />
                </div>
                <div className="flex w-9/10 fixed bottom-0">
                    { allInput ?
                        
                        <Link 
                            to="/download" 
                            onClick={saveInput}
                            className="w-full text-white text-center font-bold px-12 py-2 rounded-md my-4 bg-blue-500"
                        >
                            完了する
                        </Link>
                        :
                        <button
                            className="w-full text-white text-center font-bold px-12 py-2 rounded-md my-4 bg-gray-400"
                            onClick={sayAllInput}
                        >
                            完了する
                        </button>
                    }
                    {/* <button
                        className="w-auto text-white text-center font-bold px-2 py-2 rounded-md my-4 bg-blue-500 ml-8"
                        onClick={() => {saveInput(); saveChangeIcon();}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d={saveIcon} />
                        </svg>
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default createEvent