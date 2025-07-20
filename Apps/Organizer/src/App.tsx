// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      <p className="">適当な画像</p>
      <p>スタンプラリーをサクッとミニマムに作成できます！</p>
      <div className="w-full flex justify-center items-center flex-col">
        <Link to="/create" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4">新しく作成する</Link>
        <Link to="/load" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4">設定ファイルを読み込む</Link>
      </div>
    </>
  )
}

export default App
