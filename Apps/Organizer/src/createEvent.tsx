import Header from './header.tsx'
import { Link } from 'react-router-dom'
function createEvent () {
    return(
        <>
            <Header text="イベントの新規作成"/>
            
            <div className="w-full flex justify-center items-center flex-col mb-30">
                
                <div className="w-9/10">
                    <p className="mt-4 mb-2">イベントの名前</p>
                    <input type="text" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" placeholder="イベントの名称を入力"/>
                    <p className="mt-6 my-2">イベントの終了日</p>
                    <input type="date" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>
                    <p className="mt-6 my-2">地図のアップロード</p>
                    <input type="file" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>
                    <p className="mt-6 my-2">概要</p>
                    <input type="text" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full h-30 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none" placeholder="イベントの概要を入力"/>
                    <p className="mt-6 my-2">サムネイルのアップロード</p>
                    <input type="file" className="bg-gray-100 text-gray-900 rounded-lg p-2.5 w-full text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>

                </div>
                <Link to="/checkpoints" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">イベントを作成</Link>
            </div>
        </>
    )
}

export default createEvent