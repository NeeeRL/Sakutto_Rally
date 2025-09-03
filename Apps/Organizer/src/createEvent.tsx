import Header from './header.tsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
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

const createEvent = () => {

    const [ eventName, setEventName ] = useState<string>(getInitialValue("eventName"))
    const [ rootURL, setRootURL ] = useState<string>(getInitialValue("rootURL"))
    const [ startDate, setStartDate ] = useState<string>((getInitialValue("startDate")))
    const [ endDate, setEndDate ] = useState<string>(getInitialValue("endDate"))
    // mapは画像
    // const [ map, setMap ] = useState<string>("")
    const [ description, setDescription ] = useState<string>(getInitialValue("description"))
    // thumbnailは画像
    // const [ thumbnail, setThumbnail ] = useState<string>("")

    const saveInput = () => {
        //これはデバッグ用
        // console.log(stored)
        // const data: eventData = stored ? JSON.parse(stored) : {} as eventData

        const newData: preEventData = {
            eventName: eventName,
            rootURL: rootURL,
            startDate: startDate,
            endDate: endDate,
            description: description,
            checkPoints: getInitialValue("checkPoints")
        }

        localStorage.setItem("eventData", JSON.stringify(newData))
        // console.log("上書き後", newData)
    }
    
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
                        onChange={ (event) => setRootURL(event.target.value) }
                        type="text" 
                        className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                        placeholder="index.htmlの設置場所を入力"
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