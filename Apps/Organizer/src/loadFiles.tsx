import type React from 'react'
import Header from './header.tsx'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import type { eventData } from './types/event.ts'

const base64ToBlob = (base64: string) => {
    const arr = base64.split(",")
    const mime = arr[0].match(/:(.*?);/)?.[1] || "application/octet-stream"
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}
const openIDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open("images", 1)

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result
            if (!db.objectStoreNames.contains("images")) {
                db.createObjectStore("images", {keyPath: "key"})
            }
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}
const saveIDB = async (key: string, file: File) => {
    const db = await openIDB()

    return new Promise<void>((resolve, reject) => {
        const tx = db.transaction("images", "readwrite")
        const store = tx.objectStore("images")

        const request = store.put({key, file})

        request.onsuccess = () => resolve()
        request.onerror = () => reject(request.error)
    })
}

function loadFiles () {

    const navigate = useNavigate()
    const fileInput = useRef<HTMLInputElement>(null)

    // フォームの入力要素が変更されたときのイベントの型
    const checkJsonFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = async (event) => {
                const fileContent = event.target?.result as string
                try{
                    const jsonFile = JSON.parse(fileContent)
                    if (checkJsonKeys(jsonFile)) { 
                        if(jsonFile.map && jsonFile.map.startsWith("data:")){
                            const blob = base64ToBlob(jsonFile.map)
                            const fileObj = new File([blob], "map.png", { type: blob.type })
                            await saveIDB("map", fileObj)
                            delete jsonFile.map
                        }
                        if (jsonFile.thumbnail && jsonFile.thumbnail.startsWith("data:")) {
                            const blob = base64ToBlob(jsonFile.thumbnail)
                            const fileObj = new File([blob], "thumbnail.png", { type: blob.type })
                            await saveIDB("thumbnail", fileObj)
                            delete jsonFile.thumbnail
                        }
                        if (jsonFile.clearImage && jsonFile.clearImage.startsWith("data:")) {
                            const blob = base64ToBlob(jsonFile.clearImage)
                            const fileObj = new File([blob], "clearImage.png", { type: blob.type })
                            await saveIDB("clearImage", fileObj)
                            delete jsonFile.clearImage
                        }

                        localStorage.setItem("eventData", JSON.stringify(jsonFile))
                        navigate("/create")        
                    }
                    else {
                        alert("ファイル形式が正しくありません")
                        if(fileInput.current){
                            fileInput.current.value = ""
                        }
                    }
                }
                catch(err){
                    console.error("JSON cannot parsed", err)
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
        const keys = ["eventName", "rootURL", "startDate", "endDate", "description", "clearMessage", "checkPoints", "map", "thumbnail", "clearImage"]
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
            <Header text="設定ファイルを読み込む" to="/"/>
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