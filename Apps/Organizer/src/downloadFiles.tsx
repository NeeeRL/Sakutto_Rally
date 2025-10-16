import Header from './header.tsx'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { checkPoint, eventData } from './types/event.ts'
import QRCode from 'react-qr-code'
import JSZip from 'jszip'
import { templates } from './templates.tsx'

//この関数を使うときは必ずawaitを使うこと
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob) // "data:image/png;base64,~" の形式
  })
}

//ここはあとで共通化するので消す
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
const getIDB = async (key: string): Promise<File | null> => {
    const db = await openIDB()

    return new Promise((resolve, reject) => {
        const tx = db.transaction("images", "readonly")
        const store = tx.objectStore("images")

        const request = store.get(key)

        request.onsuccess = () => {
            const result = request.result
            resolve(result ? result.file : null)
        }
        request.onerror = () => reject(request.error)
    })
}

const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
const renderTemplate = (template: string, data: Record<string, string>) => {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] ?? "");
}

function downloadFiles () {

    const settings = localStorage.getItem("eventData")

    const generateHTML = async () => {
    
        try{
            if(settings){
                const data = JSON.parse(settings)
                const mapFile = await getIDB("map")
                const thumbFile = await getIDB("thumbnail")
                const clearImageFile = await getIDB("clearImage")

                if(mapFile){
                    data.map = await blobToBase64(mapFile)
                }
                if (thumbFile) {
                    data.thumbnail = await blobToBase64(thumbFile)
                }
                //まだ呼び出していない
                if (clearImageFile) {
                    data.clearImage = await blobToBase64(clearImageFile)
                }

                const zipHTML = new JSZip()

                const topPage = renderTemplate(
                    templates.head + templates.indexMain + templates.scriptHead + templates.commonScript + templates.indexScript + templates.scriptFoot,
                    { 
                        title: data.eventName + "-ホーム", 
                        eventName: data.eventName,
                        start: data.startDate, 
                        end: data.endDate,
                        image: data.thumbnail,
                        description: data.description,
                        rootURL: data.rootURL,
                        stampCount: data.checkPoints.length
                    }
                )
                const mapPage = renderTemplate(
                    templates.head + templates.mapPage + templates.scriptHead + templates.commonScript + templates.scriptFoot,
                    { 
                        title: data.eventName + "-マップ",
                        eventName: data.eventName,
                        map: data.map
                    }
                )

                const checkPointsProgress = () => {
                    let ans = ""
                    data.checkPoints.forEach((element: checkPoint, index: number) => {
                        ans += `{ id: '${element.id}', name: '${element.name}' }${ data.checkPoints.length -1 > index ? ",": ""}`
                    })
                    return ans
                }
                const progressPage = renderTemplate(
                    templates.head + templates.progressPage + templates.scriptHead + templates.commonScript + templates.progressScript + templates.scriptFoot,
                    { 
                        title: data.eventName + "-進捗",
                        eventName: data.eventName,
                        map: data.map,
                        stampCount: data.checkPoints.length,
                        checkPoints: checkPointsProgress(),
                        rootURL: data.rootURL
                    }
                )
                const clearPage = renderTemplate(
                    templates.clearPage,
                    {
                        title: data.eventName + "-クリア",
                        eventName: data.eventName,
                        stampCount: data.checkPoints.length,
                        clearMessage: data.clearMessage,
                        clearImage: data.clearImages

                    }
                )
                const error404 = renderTemplate(
                    templates.error404,
                    {}
                )
                const error403 = renderTemplate(
                    templates.error403,
                    {}
                )

                zipHTML.file("index.html", topPage)
                zipHTML.file("map.html", mapPage)
                zipHTML.file("progress.html", progressPage)
                zipHTML.file("clear.html", clearPage)
                zipHTML.file("404.html", error404)
                zipHTML.file("403.html", error403)

                //各チェックポイントのHTMLファイルを生成
                data.checkPoints.forEach((element: checkPoint) => {
                    const checkPointPage = renderTemplate(
                        templates.head + templates.checkPointMain,
                        {
                            title: data.eventName + "-" + element.name,
                            eventName: data.eventName,
                            cpName: element.name,
                            stampId: element.id,
                            stampMessage: element.description,
                            stampCount: data.checkPoints.length,
                            rootURL: data.rootURL
                        }
                    )
                    zipHTML.file(element.id + ".html", checkPointPage)
                })

                const blob = await zipHTML.generateAsync({ type: "blob"})
                downloadFile(blob, "pages.zip")
            }
        }
        catch(err){
            console.log(err)
        }
    }
    
    const downloadJson = useRef<HTMLAnchorElement>(null)

    const downloadJsonFile = async () => {
        if (settings && downloadJson.current) {
            try {
                const data = JSON.parse(settings)
                const mapFile = await getIDB("map")
                const thumbFile = await getIDB("thumbnail")
                const clearImageFile = await getIDB("clearImage")

                if(mapFile){
                    data.map = await blobToBase64(mapFile)
                }
                if (thumbFile) {
                    data.thumbnail = await blobToBase64(thumbFile)
                }
                if (clearImageFile) {
                    data.clearImage = await blobToBase64(clearImageFile)
                }

                const jsonString = JSON.stringify(data, null, 2)
                const jsonBlob = new Blob([jsonString], {type: "application/json"})
                const url = URL.createObjectURL(jsonBlob)
                downloadJson.current.href = url
                downloadJson.current.download = "settings.json"
                downloadJson.current.click()
                URL.revokeObjectURL(url)
            }
            catch(err){
                console.error(err)
            }

        }
        else {
            console.log("not data")
        }
    }

    const downloadFiles = (content: any) => {
        const url = URL.createObjectURL(content)
        const link = document.createElement("a")
        link.href = url
        link.download = "QRCodes.zip"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    const [ QRList, setQRList ] = useState<{value: string, fileName: string}[]>([]) 

    useEffect (() => {
        if(settings){
            const data = JSON.parse(settings) as eventData
            const lootURL = data.rootURL
            setQRList(Object.values(data.checkPoints).map(checkPoint => ({
                // ここでURLを決める。パラメータで判断するときもここを変更。
                value: lootURL + checkPoint.id + ".html",
                fileName: checkPoint.name + "-" + checkPoint.id
            })))
        }
    },[settings])

    const downloadQRCode = async () => {

        const zip = new JSZip()
        const svgs = document.querySelectorAll(".qr-to-zip svg")

        for (let i = 0; i < QRList.length; i++){

            const serializer = new XMLSerializer()
            const svg = svgs[i]
            const SVGString = serializer.serializeToString(svg)

            const img = new Image()
            img.src =
                "data:image/svg+xml;base64," +
                btoa(unescape(encodeURIComponent(SVGString)))
            
            await new Promise<void>((resolve) => {
                img.onload = () => {
                    const canvas = document.createElement("canvas")
                    canvas.width = img.width
                    canvas.height = img.height
                    const ctx = canvas.getContext("2d")
                    if (!ctx) return

                    ctx.drawImage(img, 0, 0);
                    const pngUrl = canvas.toDataURL("image/png")

                    const base64Data = pngUrl.split(",")[1]
                    zip.file(QRList[i].fileName + ".png", base64Data, { base64: true })
                    resolve()
                }
            })    
        }
            const QRBlob = await zip.generateAsync({type: "blob"})
            downloadFiles(QRBlob)    
    }
    return(
        <>            
            <Header text="ファイルをダウンロード" to="/create"/>
            <div className="w-full flex justify-center items-center flex-col mb-30">
                <h2 className="font-bold text-lg text-center">ダウンロード可能なファイル</h2>
                {/* ユーザーには見せないけど二次元コードを描画 */}
                <div className="qr-to-zip hidden">
                    {QRList.map((item, i) => (
                        <QRCode 
                            key = {i}
                            value = {item.value}
                            size = {256}
                        />
                    ))}
                </div>

                {/* HTMLファイルのダウンロード */}
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 bg-gray-200 rounded-lg p-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <div className="m-4 w-36">
                        <p>HTMLファイル郡</p>
                        <p className="text-xs text-gray-600">アップロード用HTMLファイル郡（ZIP形式）</p>
                    </div>
                    <button
                        className="bg-blue-400 text-white rounded-xl h-8 px-4"
                        onClick={generateHTML}
                    >
                        ダウンロード
                        </button>
                </div>
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 bg-gray-200 rounded-lg p-1.5 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                    <div className="m-4 w-36">
                        <p>二次元コード郡
    
                        </p>
                        <p className="text-xs text-gray-600">二次元コードの画像ファイル郡（ZIP形式）</p>
                    </div>
                    <button 
                        onClick={downloadQRCode}
                        className="bg-blue-400 text-white rounded-xl h-8 px-4"
                    >
                        ダウンロード
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    {/* アイコン */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 bg-gray-200 rounded-lg p-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div className="m-4 w-36">
                        <p>設定ファイル</p>
                        <p className="text-xs text-gray-600">バックアップ用</p>
                    </div>
                    <button 
                        onClick={downloadJsonFile}
                        className="bg-blue-400 text-white rounded-xl h-8 px-4"
                    >

                        ダウンロード
                    </button>
                    {/* ここは表示されない */}
                    <a ref={downloadJson} className="hidden"></a>

                </div>

                <button
                    className="bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4"
                    onClick={() => {downloadJsonFile(); downloadQRCode();}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    すべてを一括ダウンロード
                </button>
                <div className="w-full flex justify-center items-center flex-col">
                    <p className='block w-9/10'>設定ファイルをダウンロードすることで，設定を復元することができます。</p>
                </div>
                <Link
                    to="/"
                    className="bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4"
                >
                    トップページに戻る
                </Link>
            </div>
        </>
    )
}

export default downloadFiles