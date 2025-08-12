import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface CheckPoint {
  id: number
  text: string
}

let id: number = 0

function addCheckPoints () {

    const [ newCheckPoint, setNewCheckPoint] = useState<string>('')
    const [ checkPoints, setCheckPoints] = useState<CheckPoint[]>([])

    const addCheckPoint = (event: React.FormEvent) => {
        event.preventDefault()
        if (newCheckPoint.trim() === "") return
        setCheckPoints([...checkPoints, { id: id++, text: newCheckPoint }])
        setNewCheckPoint("")
    }

    const removeCheckPoint = (removeId: number) => {
        setCheckPoints(checkPoints.filter(checkPoint => checkPoint.id !== removeId))
    } 

    return(
        <>
            <Header text="チェックポイントの設定"/>
        
            <div className="w-full flex justify-center items-center flex-col">
                {/* <p className="">チェックポイントを追加</p> */}
                <div className="w-9/10">
                <div className="my-10">
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
                    <ul className="w-full">
                        {checkPoints.map((checkPoint) => (
                            <li
                                key={checkPoint.id}
                            >
                                <span>{checkPoint.text}</span>
                                <button
                                    onClick={() => removeCheckPoint(checkPoint.id)}
                                >
                                    X
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