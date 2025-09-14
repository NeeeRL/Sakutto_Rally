import type React from 'react'
import Header from './header.tsx'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import type { eventData } from './types/event.ts'

function loadFiles () {

    const navigate = useNavigate()
    const fileInput = useRef<HTMLInputElement>(null)

    // フォームの入力要素が変更されたときのイベントの型
    const checkJsonFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const fileContent = event.target?.result as string
                try{
                    const jsonFile = JSON.parse(fileContent)
                    if (checkJsonKeys(jsonFile)) {         
                        localStorage.setItem("eventData", fileContent)
                        navigate("/create")        
                    }
                    else {
                        alert("ファイル形式が正しくありません")
                        if(fileInput.current){
                            fileInput.current.value = ""
                        }
                    }
                }
                catch{
                    console.error("JSON cannot parsed")
                    alert("無効なファイル形式です")
                    if(fileInput.current){
                        fileInput.current.value = ""
                    }
                }
            }
            reader.readAsText(file)
        }
    }

    const checkJsonKeys = (data: any): boolean => {
        // JSON形式であることの確認
        if (typeof data !== "object" || data === null) {
            return false;
        }
        const keys = ["eventName", "rootURL", "startDate", "endDate", "description", "checkPoints"]
        for (const key of keys) {
            if (!(key in data)){
                return false
            }
        }
        //checkPointsが配列であることの確認
        if (!Array.isArray(data.checkPoints)){
            return false
        }
        const cpKeys = ["id", "name", "description"]
        for (const cp of data.checkPoints) {
            // checkPointの中身が正しいことの確認
            if (typeof cp !== "object" || cp === null) {
                return false;
            }
            for (const key of cpKeys) {
                if (!(key in cp)) {
                    return false
                }
            }
        }
        return true
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
                        ref={fileInput}
                        className="bg-gray-100 text-gray-900 rounded-lg mb-24 p-2.5 w-full h-32 text-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-400 outline-none"
                    />

                </div>
                {/* <Link to="/download" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">アップロードする</Link> */}
            </div>
        </>
    )
}

export default loadFiles