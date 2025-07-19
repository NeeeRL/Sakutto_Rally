import Header from './header.tsx'
import { Link } from 'react-router-dom'
function createEvent () {
    return(
        <>
            <Header text="イベントを作成"/>
            <p className="">イベント作成</p>

            <Link to="/checkpoints" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4">イベントを作成</Link>
        </>
    )
}

export default createEvent