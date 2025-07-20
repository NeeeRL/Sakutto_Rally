import Header from './header.tsx'
import { Link } from 'react-router-dom'
function addCheckPoints () {
    return(
        <>
            <Header text="チェックポイントを追加"/>
        
            <div className="w-full flex justify-center items-center flex-col">
                <p className="">ロード画面</p>
                <Link to="/download" className="fixed w-9/10 bottom-0 text-white text-center bg-blue-500 font-bold px-12 py-2 rounded-md my-4">完了する</Link>
            </div>
        </>
    )
}

export default addCheckPoints