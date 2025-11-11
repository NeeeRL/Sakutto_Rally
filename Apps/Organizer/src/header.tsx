import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import './App.css'

function header(props: {text: string, to: string}) {

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);
  
  // const [count, setCount] = useState(0)
  const color = "black"
  const navigate = useNavigate()

  return (
    <>
      <div className="flex items-center h-15 w-full">
        {/* 戻るアイコン */}
        <button className="absolute m-3 rounded-full bg-white" onClick={() => navigate(props.to)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="size-5">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
        <h1 className="text-xl mx-auto font-bold">{ props.text }</h1>
        {/* <button className="m-3 rounded-full bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </button> */}
      </div>
    </>
  )
}

export default header
