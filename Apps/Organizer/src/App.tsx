// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
// import type { eventData } from './types/event'

function App() {

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full size-64 mx-auto">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
      <p>スタンプラリーをサクッとミニマムに作成できます！</p>
      <div className="w-full flex justify-center items-center flex-col">
        <Link 
          to="/create" 
          className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4"
          // onClick={generateNullJson}
        >
          新しく作成する
        </Link>
        <Link to="/load" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md my-4">設定ファイルを読み込む</Link>
      </div>
    </>
  )
}

export default App
