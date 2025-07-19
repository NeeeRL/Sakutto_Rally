// import { useState } from 'react'
// import './App.css'

function header(props: {text: string}) {

  // const [count, setCount] = useState(0)
  const color = "black"
  const isReturnButton = window.history.length < 1

  return (
    <>
      <div className="flex items-center h-15 w-full">
        {/* 戻るアイコン */}
        {!isReturnButton && (
          <button className="m-3 rounded-full bg-white absolute" onClick={() => window.history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="size-5">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        <h1 className="text-xl mx-auto font-bold">{ props.text }</h1>
      </div>
    </>
  )
}

export default header
