import Header from './header.tsx'
import { Link } from 'react-router-dom'
function addCheckPoints () {
    return(
        <>
            <Header text="チェックポイントを追加"/>
            <p className="">ロード画面</p>

        <Link to="/download" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4">完了する</Link>
        </>
    )
}

export default addCheckPoints