import { Link } from 'react-router-dom'
import './App.css'
import mainImage from '../img/honbann.svg'

const resetLocalStorage  = () => {
  localStorage.removeItem("eventData")
  indexedDB.deleteDatabase("images")
}

function App() {

  let isSaved = false

  const storage = localStorage.getItem("eventData")
  if (storage !== null){
    isSaved = true
  }

  return (
    <>
      <h1 className='mt-4 mb-2 text-4xl text-center'>Sakutto Rally</h1>
      <p className='text-center mb-4'>～気軽に運用できるスタンプラリーメーカー～​</p>
      <img src={mainImage} alt="" className='w-[90%] h-auto m-auto  ' />
      <p className='text-center w-[84%] m-auto'>スタンプラリーイベントをサクッと気軽に開催できる、ミニマムなスタンプラリーメーカーです。サーバーさえあればファイルの作成も運用にもコストがかかりません。</p>
      <div className="w-full flex justify-center items-center flex-col my-8">
        <div className='my-4 flex justify-center items-center flex-col bg-gray-100 w-[84%] py-4 rounded-2xl'>
          
          <div className='flex justify-center items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className='text-xl my-2'>初めての方はこちら</p>
          </div>
          <p className='w-[80%] m-auto text-center'>スタンプラリーファイルを新しく生成することができます。</p>
          <Link 
            to="/create" 
            className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md mb-2 mt-4"
            onClick={resetLocalStorage}
          >
            新しく作成する
          </Link>
        </div>

        {
            isSaved ? 
          <div className='my-4 flex justify-center items-center flex-col bg-gray-100 w-[84%] py-4 rounded-2xl'>
            <div className='flex justify-center items-center gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <p className='text-xl my-2'>以前のデータを利用</p>
            </div>
            <p className='w-[80%] m-auto text-center'>以前作成したデータが残っています。このデータをもとに作業を再開できます。</p>
            <Link 
              to="/create" 
              className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md mb-2 mt-4"
            >
              再開する
            </Link>
          </div>
            :
             ""
        }


        <div className='my-4 flex justify-center items-center flex-col bg-gray-100 w-[84%] py-4 rounded-2xl'>
          
          <div className='flex justify-center items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>

            <p className='text-xl my-2'>データを読み込む</p>
          </div>
          <p className='w-[80%] m-auto text-center'>設定ファイルを読み込めば、以前使用した時のデータを復元できます。</p>
          <Link to="/load" className="text-white text-center bg-blue-400 font-bold px-12 py-2 rounded-md mb-2 mt-4">設定ファイルを読み込む</Link>
        </div>

      </div>
    </>
  )
}

export default App
