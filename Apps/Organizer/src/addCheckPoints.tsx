import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { customAlphabet, customRandom } from 'nanoid'
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

function addCheckPoints () {

    const [ newCheckPoint, setNewCheckPoint] = useState<string>("")
    const [ checkPointDesctiption, setCheckPointDescription ] = useState<string>("")
    const [ checkPoints, setCheckPoints] = useState<checkPoint[]>(getInitialValue("checkPoints"))

    const [ editingId, setEditingId ] = useState<string | null>(null)

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
            checkPoints: checkPoints
        }

        localStorage.setItem("eventData", JSON.stringify(newData))
    }

    return(
        <>
            <Header text="チェックポイントの設定"/>
        
            <div className="w-full flex items-center flex-col mb-30">
                <div className="w-9/10">
                <div className="flex flex-col">
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
                    <h2 className="font-bold text-lg my-4 block">現在のチェックポイント</h2>
                    <ul className="w-full flex flex-col justify-start overflow-y-scroll h-[calc(100vh-450px)] min-h-32">
                        {checkPoints.map((checkPoint) => (
                            <li
                                key={checkPoint.id}
                                className="flex items-start py-1.5 px-2.5 justify-between w-full"
                            >
                                {/* デバッグ用に赤い文字でIDを出力している */}
                                <span className="text-sm">{checkPoint.name}{/*<span className='text-red-600'>{checkPoint.id}</span>*/}</span>
                                <div className="flex items-center space-x-2">
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
                {/* 下のボタン */}
                <Link 
                    to="/download" 
                    onClick={saveInput}
                    className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4"
                >
                    完了する
                </Link>
            </div>
        </>
    )
}

export default addCheckPoints