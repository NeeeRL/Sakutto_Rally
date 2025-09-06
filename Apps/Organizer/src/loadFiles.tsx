import type React from 'react'
import Header from './header.tsx'
import { Link, useNavigate } from 'react-router-dom'
// import type { eventData } from './types/event.ts'

function loadFiles () {

    const navigate = useNavigate()


    // フォームの入力要素が変更されたときのイベントの型
    const checkJsonFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                
                
                //値が正しいかチェックを後で実装

                
                const fileContent = event.target?.result as string
                // console.log(JSON.parse(fileContent))
                localStorage.setItem("eventData", fileContent)
                navigate("/create")
            }
            reader.readAsText(file)
        }
    }

    return(
        <>
            <Header text="設定ファイルを読み込む"/>
            <div className="w-full flex justify-center items-center flex-col mb-30">                
                <div className="w-9/10">
                    <h2 className="font-bold text-lg text-center">設定ファイルをアップロードしてください</h2>
                    <p className="my-14">サクッとラリーでスタンプラリーを作成したことがある場合，設定ファイルがあれば復元できます。</p>
                    <label htmlFor="settingsFile" className="mt-6 my-2 block">設定ファイルのアップロード</label>
                    <input
                        id="settingsFile"
                        type="file"
                        accept="application/json"
                        onChange={checkJsonFile}
                        className="bg-gray-100 text-gray-900 rounded-lg mb-24 p-2.5 w-full h-32 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />

                </div>
                {/* <Link to="/download" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">アップロードする</Link> */}
            </div>
        </>
    )
}

export default loadFiles