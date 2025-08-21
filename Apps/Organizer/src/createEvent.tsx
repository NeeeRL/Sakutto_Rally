import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { eventData } from './types/event'

function createEvent () {

    const [ eventName, setEventName ] = useState<string>("")
    const [ startDate, setStartDate ] = useState<string>("")
    const [ endDate, setEndDate ] = useState<string>("")
    // mapは画像
    // const [ map, setMap ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    // thumbnailは画像
    // const [ thumbnail, setThumbnail ] = useState<string>("")

    const handleSave = () => {
        //ここは後で空の場合の判別で使う
        const stored = localStorage.getItem("eventData")
        //これはデバッグ用
        // console.log(stored)
        // const data: eventData = stored ? JSON.parse(stored) : {} as eventData

        const newData: eventData = {
            // ...data,
            eventName: eventName,
            startDate: startDate,
            endDate: endDate,
            description: description,
            //チェックポイントは初期値あったほうがいいのでは？例として。今はnullを入れるために形をnull許容にしている。
            checkPoints: null
        }

        localStorage.setItem("eventData", JSON.stringify(newData))
        // console.log("上書き後", newData)
    }


    // const debug = () => {
    //     console.log(eventName, date, description)
    // }
    
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
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" placeholder="イベントの名称を入力"
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
                    <label htmlFor="map" className="mt-6 my-2 block">地図のアップロード</label>
                    <input 
                        id="map" 
                        type="file" 
                        accept="image/*" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />
                    <label htmlFor="description" className="mt-6 my-2 block">概要</label>
                    <textarea 
                        id="description" 
                        value={description}
                        onChange={ (event) => setDescription(event.target.value) }
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" 
                        placeholder="イベントの概要を入力"
                    />
                    <label htmlFor="thumbnail" className="mt-6 my-2 block">サムネイルのアップロード</label>
                    <input 
                        id="thumbnail" 
                        type="file" 
                        accept="image/*" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />
                </div>
                <Link 
                    to="/checkpoints" 
                    onClick={handleSave}
                    className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4"
                >
                    イベントを作成
                </Link>
            </div>
        </>
    )
}

export default createEvent