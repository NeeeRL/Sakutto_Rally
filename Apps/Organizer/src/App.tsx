// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      <p className="">適当な画像</p>
      <p>スタンプラリーをさくっとミニマムに作成できます！</p>
      <div className="w-full flex justify-center">
        <Link to="/load" className="text-white bg-blue-400 font-bold px-12 py-2 rounded-md">設定ファイルを読み込む</Link>
      </div>
    </>
  )
}

export default App
