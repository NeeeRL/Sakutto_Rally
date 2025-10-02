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
        return parsedData[key] ? parsedData[key] : null
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

    const [ eventName, setEventName ] = useState<string>(getInitialValue("eventName"))
    const [ rootURL, setRootURL ] = useState<string>(getInitialValue("rootURL"))
    const [ startDate, setStartDate ] = useState<string>((getInitialValue("startDate")))
    const [ endDate, setEndDate ] = useState<string>(getInitialValue("endDate"))
    // mapは画像
    const [ map, setMap ] = useState<string | null>("")
    const [ description, setDescription ] = useState<string>(getInitialValue("description"))
    // thumbnailは画像
    const [ thumbnail, setThumbnail ] = useState<string | null>("")

    const saveInput = () => {
        //これはデバッグ用
        // console.log(stored)
        // const data: eventData = stored ? JSON.parse(stored) : {} as eventData

        const newData: preEventData = {
            eventName: eventName,
            rootURL: rootURL.slice(-1) === "/" && rootURL === ""  ? rootURL : rootURL + "/",
            startDate: startDate,
            endDate: endDate,
            description: description,
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
            }
        }
    }
        
    useEffect(() => {
        (async () => {
            const mapFile = await getIDB("map")
            const thumbnailFile = await getIDB("thumbnail")
            if (mapFile) setMap(URL.createObjectURL(mapFile))
            if (thumbnailFile) setThumbnail(URL.createObjectURL(thumbnailFile))
        })()
    }, [])
    
    return(
        <>
            <Header text="イベントの新規作成"/>
            
            <div className="w-full flex justify-center items-center flex-col mb-30">
                
                <div className="w-9/10">
                    <label htmlFor="eventName" className="mt-4 mb-2 block">イベントの名前</label>
                    <input 
                        id="eventName" 
                        value={eventName}
                        onChange={ (event) => setEventName(event.target.value) }
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
                        type="text" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                        placeholder="例)https://example.com/"
                    />
                    <label htmlFor="startDate" className="mt-6 my-2 block">イベントの開始日</label>
                    <input 
                        id="startDate" 
                        value={startDate}
                        onChange={ (event) => setStartDate(event.target.value) }
                        type="date" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />
                    <label htmlFor="endDate" className="mt-6 my-2 block">イベントの終了日</label>
                    <input 
                        id="endDate" 
                        value={endDate}
                        onChange={ (event) => setEndDate(event.target.value) }
                        type="date" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
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
                            {map ? "別の画像を選択" : <span>まだ画像が選択されていません</span> }
                        </label>
                        {map ? <img src={map} alt="map preview" className="mt-2 rounded-lg" /> : ""}
                    </div>
                    <label htmlFor="description" className="mt-6 my-2 block">概要</label>
                    <textarea 
                        id="description" 
                        value={description}
                        onChange={ (event) => setDescription(event.target.value) }
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                        placeholder="イベントの概要を入力"
                    />                    
                    <div>
                        <label htmlFor="thumbnail" className="mt-6 my-2 block">サムネイル画像のアップロード</label>
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
                            {thumbnail ? "別の画像を選択" : <span>まだ画像が選択されていません</span> }
                        </label>
                        {thumbnail ? <img src={thumbnail} alt="thumbnail preview" className="mt-2 rounded-lg"/> : ""}
                    </div>
                </div>
                <Link 
                    to="/checkpoints" 
                    onClick={saveInput}
                    className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4"
                >
                    イベントを作成
                </Link>
            </div>
        </>
    )
}

export default createEvent