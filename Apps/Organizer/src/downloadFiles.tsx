import Header from './header.tsx'
function downloadFiles () {
    return(
        <>
            
            <Header text="ファイルをダウンロード"/>
            <div className="w-full flex justify-center items-center flex-col">
                <p className="">HTML，設定JSON，QRコード</p>
            </div>
        </>
    )
}

export default downloadFiles