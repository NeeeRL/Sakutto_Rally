import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { customAlphabet } from 'nanoid'
import type { checkPoint, eventData } from './types/event.ts'

const getInitialValue = (key: string) => {
    const stored = localStorage.getItem("eventData")
    if (!stored) {
        return []
    }

    try {
        const parsedData = JSON.parse(stored)
        return parsedData[key] ? parsedData[key] : []
    }
    catch (event) {
        console.error("JSON is not formatted", event)
        return []
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

function addCheckPoints () {
    
    const [ map, setMap ] = useState<string>("")
    const [ thumbnail, setThumbnail ] = useState<string>("")
    const [ clearImage, setClearImage ] = useState<string>("")

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

    const [ newCheckPoint, setNewCheckPoint] = useState<string>("")
    const [ checkPointDesctiption, setCheckPointDescription ] = useState<string>("")
    const [ checkPoints, setCheckPoints] = useState<checkPoint[]>(getInitialValue("checkPoints"))

    const [ editingId, setEditingId ] = useState<string | null>(null)

    const eventName = getInitialValue("eventName") ?? ""
    const rootURL = getInitialValue("rootURL") ?? ""
    const startDate = getInitialValue("startDate") ?? ""
    const endDate = getInitialValue("endDate") ?? ""
    const description = getInitialValue("description") ?? ""
    const clearMessage = getInitialValue("clearMessage") ?? ""

    const allInput = !!(eventName.length && rootURL.length >= 2 && startDate && endDate && description.length && map && thumbnail && clearImage && clearMessage.length && checkPoints.length && map && thumbnail && clearImage)
    const sayAllInput = () => {
        alert("すべて入力してください")
    }

    const [ saveIcon, setSaveIcon ] = useState("M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9")


    const moveCheckPoint = (id: string, direction: "up" | "down") => {
        setCheckPoints(prev => {
            const index = prev.findIndex(cp => cp.id === id)
            if (index === -1) return prev

            // 移動先のインデックスを計算
            const newIndex = direction === "up" ? index - 1 : index + 1

            // 配列の範囲外なら何もしない
            if (newIndex < 0 || newIndex >= prev.length) return prev

            // 新しい配列をコピーして入れ替え
            const newCheckPoints = [...prev]
            const temp = newCheckPoints[index]
            newCheckPoints[index] = newCheckPoints[newIndex]
            newCheckPoints[newIndex] = temp

            return newCheckPoints
        })
    }

    const changeCheckPoint = (event: React.FormEvent) => {
        event.preventDefault()
        if (newCheckPoint.trim() === "") return

        if (editingId) {
            //変更の場合は同じIDを持つものだけ置き換え
            setCheckPoints(checkPoints.map(checkPoint =>
                checkPoint.id === editingId ? { id: editingId, name: newCheckPoint, description: checkPointDesctiption} : checkPoint 
            ))
            setEditingId(null)
        }
        else {
            //追加の場合は新しくIDを生成
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            const generateID = customAlphabet(alphabet, 12)
            setCheckPoints([...checkPoints, { id: "a" + generateID(), name: newCheckPoint, description: checkPointDesctiption}])
        }
        setNewCheckPoint("")
        setCheckPointDescription("")
    }

    const editCheckPoint = (updateId: string) => {
        const editing = checkPoints.find(checkPoint => checkPoint.id === updateId)
        if (editing) {
            setEditingId(updateId)
            setNewCheckPoint(editing.name)
            setCheckPointDescription(editing.description)
        }
    }

    const removeCheckPoint = (removeId: string) => {
        setCheckPoints(checkPoints.filter(checkPoint => checkPoint.id !== removeId))
    }

    const saveInput = () => {
        const newData: eventData = {
            eventName: getInitialValue("eventName"),
            rootURL: getInitialValue("rootURL"),
            startDate: getInitialValue("startDate"),
            endDate: getInitialValue("endDate"),
            description: getInitialValue("description"),
            isClearSound: getInitialValue("isClearSound"),
            clearMessage: getInitialValue("clearMessage"),
            checkPoints: checkPoints
        }

        localStorage.setItem("eventData", JSON.stringify(newData))
    }

        const saveChangeIcon = () => {
        setSaveIcon("m4.5 12.75 6 6 9-13.5")
        saveInput
        setTimeout(() => {
            setSaveIcon("M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9")
        }, 3000)
    }

    return(
        <>
            <Header text="チェックポイントの設定" to="/"/>
        
            <div className="w-full flex items-center flex-col mb-30">
                <div className="w-9/10">
                    <div className="flex flex-col">
                        <div className="flex">
                            <Link 
                                to="/create"
                                onClick={saveInput}
                                className="w-[calc(50%-1px)] bottom-0 font-bold text-gray-500/50 text-center py-2 rounded-t-xl mt-4 block bg-gray-100 border-gray-300 border-1 border-b-0 mx-1"
                            >
                                1.イベント情報
                            </Link>
                            <Link 
                                to="/checkpoints"
                                onClick={saveInput}
                                className="w-[calc(50%-1px)] bottom-0 font-bold text-center py-2 rounded-t-xl mt-4 block border-gray-300 border-1 border-b-0 mx-1"
                            >
                                2.チェックポイント
                            </Link>
                        </div>
                        <form onSubmit={changeCheckPoint} action="addCheckPoint">
                            <label htmlFor="addCheckPointName" className="font-bold text-lg my-4 block">チェックポイント名</label>
                            <input 
                                type="text" 
                                id="addCheckPointName" 
                                onChange={(event) => setNewCheckPoint(event.target.value)}
                                className="block my-4 
                                bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                                placeholder="チェックポイント名を入力"
                                value={newCheckPoint}
                            />
                            <label htmlFor="addDescription" className="font-bold text-lg my-4 block">獲得時のメッセージ</label>
                            <textarea 
                                id="addDescription" 
                                onChange={(event) => setCheckPointDescription(event.target.value)}
                                className="block my-4 
                                bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                                placeholder="スタンプ獲得時のメッセージを追加"
                                value={checkPointDesctiption}
                            />
                            <div className="flex my-4 w-full justify-end">
                                <button type="submit" className="bg-gray-100 text-gray-900 rounded-full px-4 py-2.5 text-xs font-bold">{ editingId ? "更新" : "+ 追加" }</button>
                            </div>
                        </form>
                        <h2 className="font-bold text-lg mt-4 mb-1 block">現在のチェックポイント</h2>
                        <p className="text-xs">参加者側で表示される順番を調整できます</p>
                        <ul className="w-full flex flex-col justify-start overflow-y-scroll h-[calc(100vh-450px)] min-h-32">
                            {checkPoints.map((checkPoint) => (
                                <li
                                    key={checkPoint.id}
                                    className="flex items-center py-1.5 px-2.5 justify-between w-full"
                                >
                                    {/* デバッグ用に赤い文字でIDを出力している */}
                                    <span className="text-sm break-all flex-grow pr-2 self-start">{checkPoint.name}{/*<span className='text-red-600'>{checkPoint.id}</span>*/}</span>
                                    <div className="flex items-center space-x-2 flex-shrink-0">
                                        <button                                 
                                            className="flex h-full items-center my-auto"
                                            onClick={() => moveCheckPoint(checkPoint.id, "up")}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                        </button>
                                        <button                                 
                                            className="flex h-full items-center my-auto"
                                            onClick={() => moveCheckPoint(checkPoint.id, "down")}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>
                                        <button                                 
                                            className="flex h-full items-center my-auto"
                                            onClick={() => editCheckPoint(checkPoint.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => removeCheckPoint(checkPoint.id)}
                                            className="flex h-full items-center my-auto"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                    <button
                        className="w-auto text-white text-center font-bold px-2 py-2 rounded-md my-4 bg-blue-500 ml-8"
                        onClick={() => {saveInput(); saveChangeIcon();}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d={saveIcon} />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default addCheckPoints