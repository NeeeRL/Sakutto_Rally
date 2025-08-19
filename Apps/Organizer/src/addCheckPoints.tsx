import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { nanoid } from 'nanoid'

interface CheckPoint {
  id: string
  name: string
}

function addCheckPoints () {

    const [ newCheckPoint, setNewCheckPoint] = useState<string>('')
    const [ checkPoints, setCheckPoints] = useState<CheckPoint[]>([])

    const addCheckPoint = (event: React.FormEvent) => {
        event.preventDefault()
        if (newCheckPoint.trim() === "") return
        setCheckPoints([...checkPoints, { id: nanoid(), name: newCheckPoint }])
        setNewCheckPoint("")
    }

    const removeCheckPoint = (removeId: string) => {
        setCheckPoints(checkPoints.filter(checkPoint => checkPoint.id !== removeId))
    } 

    return(
        <>
            <Header text="チェックポイントの設定"/>
        
            <div className="w-full flex items-center flex-col">
                {/* <p className="">チェックポイントを追加</p> */}
                <div className="w-9/10">
                <div className="flex flex-col my-10">
                    <form onSubmit={addCheckPoint} action="addCheckPoint">
                        <label htmlFor="add" className="font-bold text-lg my-4 block">チェックポイントを追加</label>
                        <input 
                            type="text" 
                            id="add" 
                            onChange={(event) => setNewCheckPoint(event.target.value)}
                            className="block my-4 
                            bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                            placeholder="チェックポイント名を入力"
                            value={newCheckPoint}
                        />
                        <div className="flex my-4 w-full justify-end">
                            <button type="submit" className="bg-gray-100 text-gray-900 rounded-full px-4 py-2.5 text-xs font-bold">+&nbsp;追加</button>
                        </div>
                    </form>
                    <h2 className="font-bold text-lg my-4 block">現在のチェックポイント</h2>
                    <ul className="w-full flex flex-col justify-start overflow-y-scroll h-[calc(100vh-450px)] min-h-32">
                        {checkPoints.map((checkPoint) => (
                            <li
                                key={checkPoint.id}
                                className="flex items-start py-1.5 px-2.5 justify-between w-full"
                            >
                                <span className="text-sm">{checkPoint.name}{checkPoint.id}</span>
                                <button
                                    onClick={() => removeCheckPoint(checkPoint.id)}
                                    className="flex h-full items-center my-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                {/* 下のボタン */}
                <Link to="/download" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">完了する</Link>
            </div>
        </>
    )
}

export default addCheckPoints