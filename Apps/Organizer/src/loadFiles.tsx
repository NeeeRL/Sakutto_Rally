import Header from './header.tsx'
import { Link } from 'react-router-dom'
function loadFiles () {
    return(
        <>
            <Header text="設定ファイルを読み込む"/>
            <div className="w-full flex justify-center items-center flex-col mb-30">                
                <div className="w-9/10">
                    <h2 className="font-bold text-lg text-center">設定ファイルをアップロードしてください</h2>
                    <p className="my-14">事前にスタンプラリーを作成したことがある場合，設定ファイルがあれば使用することができます。</p>
                    <label htmlFor="settingsFile" className="mt-6 my-2 block">設定ファイルのアップロード</label>
                    <input id="settingsFile" type="file" accept="application/json" className="bg-gray-100 text-gray-900 rounded-lg mb-24 p-2.5 w-full h-32 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"/>

                </div>
                <Link to="/download" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">アップロードする</Link>
            </div>
        </>
    )
}

export default loadFiles