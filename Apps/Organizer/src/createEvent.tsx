import Header from './header.tsx'
import { Link } from 'react-router-dom'
function createEvent () {
    return(
        <>
            <Header text="イベントの新規作成"/>
            
            <div className="w-full flex justify-center items-center flex-col mb-30">
                
                <div className="w-9/10">
                    <label htmlFor="eventName" className="mt-4 mb-2 block">イベントの名前</label>
                    <input id="eventName" type="text" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" placeholder="イベントの名称を入力"/>
                    <label htmlFor="date" className="mt-6 my-2 block">イベントの終了日</label>
                    <input id="date" type="date" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>
                    <label htmlFor="map" className="mt-6 my-2 block">地図のアップロード</label>
                    <input id="map" type="file" accept="image/*" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>
                    <label htmlFor="description" className="mt-6 my-2 block">概要</label>
                    <textarea id="description" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" placeholder="イベントの概要を入力"/>
                    <label htmlFor="thumbnail" className="mt-6 my-2 block">サムネイルのアップロード</label>
                    <input id="thumbnail" type="file" accept="image/*" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>
                </div>
                <Link to="/checkpoints" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">イベントを作成</Link>
            </div>
        </>
    )
}

export default createEvent