export const templates = {
head: `<!DOCTYPE html>
<html lang="ja">
<head>
    <title>{{title}}</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="スタンプラリーページです。" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js"></script></head>
<body>
    <header class="mt-12">
        <div class="relative rounded-full py-16 mt-10 h-fit shadow-xl mx-6 flex items-center bg-white">
            <h1 class="text-5xl text-center absolute left-1/2 -translate-x-1/2 w-9/10">
                {{eventName}}
            </h1>
        </div>
    </header>

    <noscript class="mr-16 ml-16 mt-10">
        <p class="text-4xl ">JSが有効でないようです。このサイトを満足に使うにはJavaScriptを有効にしてください。</p>
    </noscript>
`,
stampFoot: `
    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>

        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                        <div class="absolute top-0 right-0 hidden"  id="exclamation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                </div>
                <p class="text-4xl">進捗</p>
            </div>
            
            
        </a>
    </footer>`,
indexMain: `<main class="mr-16 ml-16 mt-20" id="mains">
    <div class="flex items-center flex-col">
        <div class="flex justify-center items-center pt-6 pb-2 border-b w-[80%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-13 pr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <p class="text-5xl">期間: {{start}}から{{end}}まで</p>
        </div>
    </div>
    <div class="flex justify-center mt-16 mb-16">
        <img src="{{image}}" alt="イベントのイメージ画像" class="w-[83vw] h-auto border rounded-lg shadow-md">
    </div>
    <p class="text-5xl w-[90%] m-auto">{{description}}</p>

    <div class="mb-20 mt-24 w-[92%] m-auto">
        <a href="progress.html" id="progress_link">
                <h2 class="text-6xl mb-8 text-center">現在の進捗</h1>
                <div class="flex justify-between items-center my-4">
                    <div class="text-5xl" id="pro-text">/{{stampCount}}個のスタンプを獲得済み</div>
                    <p id="pro-percent" class="text-5xl"></p>
                </div>
                <div class="bg-gray-300 w-full h-12 rounded-full overflow-hidden" id="max-progress-bar">
                    <div id="progress-bar" class="bg-blue-300 w-0 h-full transition-all duration-1000 ease-in-out "></div>
                </div> 
        </a>
        

    </div>
    
    <div class="flex items-center justify-center">
        <div id="clear-localstorage-button" class="mt-16 rounded-full bg-yellow-300 cursor-pointer pt-6 pb-6  w-[90%] ">
            <p  class="text-5xl text-center font-bold py-2">スタンプデータを削除する</p>
        </div>
    </div>
</main>

<div class="prebox fixed bottom-60 right-12 w-[9rem] h-[9rem] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 bg-blue-500">
    <div class="text-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="White" class="size-[5rem]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
    </div>            
</div>
        
<div id="UrCodeReader" class="transition-opacity duration-[5ms] ease-out opacity-0 pointer-events-none fixed inset-0 z-30 backdrop-blur-md bg-black/50 flex justify-center items-end">
    <div id="Ur-bar" class="w-full bg-white rounded-t-4xl shadow-2xl pb-20 pt-20 flex flex-col items-center transition-transform translate-y-full">
        <div class="flex items-center justify-between w-[88%] mb-8" id="Ur-bar-1">
            <svg id="Ur-close-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <p class="text-[4.2rem]">スキャン</p>
            <div class="size-20"></div>
        </div>
        <div class="flex justify-center items-center flex-col w-full h-full " id="Ur-bar-2">
            <div id="wrapper" class="relative w-[90vw] h-full" style="display: block;">
                <video id="video" autoplay muted playsinline class="w-full h-full z-80 object-contain"></video>
                <canvas id="camera-canvas" class="absolute top-0 left-0 z-80 w-full h-full z-80 object-contain"></canvas>
                <canvas id="rect-canvas" class="absolute top-0 left-0 w-full h-full"></canvas>
                <div id="permission-denied" class="absolute top-0 left-0 bg-gray-100/50 w-[90vw] h-full flex justify-center items-center flex-col z-70">
                    <div class="" style="display: block;">
                        <div class="flex justify-center flex-col items-center text-center gap-4">
                            <div class="flex justify-center items-center flex-col">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                                </svg>
                                <h1 class="text-6xl font-bold text-slate-800 tracking-tight py-4">権限がありません</h1>
                            </div>
                            <p class="text-4xl m-auto py-6 mx-20">
                                再読み込みをして、ポップアップなどからカメラの使用を許可するか、端末のカメラから二次元コードを読み込んでください。
                            </p>
                        </div>  
                    </div>             
                </div>
            </div>
        </div>
        <div id="URstatus" class="text-5xl mt-12">
            大きくはっきりと
        </div>
    </div>
</div>

    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>
            
        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] bg-gray-200 flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                        <div class="absolute top-0 right-0 hidden" id="exclamation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                </div>
                <p class="text-4xl">進捗</p>
            </div>
            
        </a>
    </footer>


    <!-- boyake ha koko -->
<div id="pop-up" class="transition-opacity duration-[5ms] ease-out opacity-0 pointer-events-none fixed inset-0 z-30 backdrop-blur-md bg-black/50 flex justify-center items-end">
    <div id="pop-bar" class=" w-full h-[40vh] bg-white rounded-t-4xl shadow-2xl p-6 flex flex-col justify-between items-center transition-transform translate-y-full">
        <div class="flex justify-center items-center flex-col">
            <div class="flex justify-center w-full">
                <div class="w-[20vw] h-4 bg-gray-300 rounded-full"></div>
            </div>

            <div class="flex flex-col items-center text-center w-[84%] mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-18 mt-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <h1 class="text-7xl font-bold my-4">確認</h1>
                <p class="text-5xl mt-4 text-gray-600">本当にスタンプのすべてのデータを削除しても大丈夫でしょうか？</p>
            </div>
        </div>
        
        <div class="w-full flex flex-col items-center h-[auto] mb-12">
            <button id="yes-pop" class="rounded-full bg-gray-300 py-5 text-6xl w-[85%] my-6 ">はい</button>
            <button id="no-pop" class="rounded-full bg-gray-300 py-5 text-6xl w-[85%] my-6 ">いいえ</button>
        </div>
    </div>
</div>`,
mapPage: `<main class="mt-10 mx-16" id="mains">
    <img src="{{map}}" alt="スタンプラリーの地図" class="w-full h-auto border">
    {{stamps}}
</main>
    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] bg-gray-200 flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
                        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>            
        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">        
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    <div class="absolute top-0 right-0 hidden"  id="exclamation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <p class="text-4xl">進捗</p>
            </div>
        </a>
    </footer>`,
commonScript:`
const fotter = document.getElementById('fotter-items');
const isPC = window.matchMedia('(pointer: fine)').matches && window.screen.width > 1024;
function handleOrientation(mediaQueryResult) {

    if (!isPC && mediaQueryResult.matches) {
        // 横向きの場合
        fotter.classList.remove('fixed');
        fotter.classList.add('border', 'w-[96%]');
        
    } else {
        // 縦向き
        fotter.classList.add('fixed');
        fotter.classList.remove('border','w-[96%]');
    }
}

const mediaQuery = window.matchMedia("(orientation: landscape)");

handleOrientation(mediaQuery);

mediaQuery.addEventListener("change", handleOrientation);

let FotterHeight = fotter.offsetHeight;

const mainElement = document.getElementById('mains');
// 12vh
const amari = (window.innerHeight * 12) / 100;
mainElement.style.marginBottom = (FotterHeight + amari) + "px";


const exclamation = document.getElementById('exclamation');
function checkAllStamps() {
const storageKey = '{{eventName}}';
const currentData = JSON.parse(localStorage.getItem(storageKey)) || [];
return currentData.length >= {{stampCount}};
}
if(checkAllStamps()) {
    exclamation.classList.remove('hidden');
}

{{customScript}}`,
indexScript: `
            const prebox = document.querySelector('.prebox');

            function updateStampProgress() {
                const progress_bar = document.getElementById('progress-bar');
                const storageKey = '{{eventName}}';
                const currentData = JSON.parse(localStorage.getItem(storageKey)) || [];
                let currentStamps = currentData.length;
                const totalStamps = {{stampCount}};
                
                const percent = document.getElementById('pro-percent');
                const protext = document.getElementById('pro-text');

                const bar_per = Math.round(currentStamps / totalStamps * 100);

                if (progress_bar) {
                    progress_bar.classList.remove('w-0');
                    protext.textContent = currentStamps + "/{{stampCount}}個のスタンプを獲得済み";
                    percent.textContent = bar_per + "%";
                    progress_bar.style.width = bar_per + "%";
                }
                
                if (currentStamps === totalStamps) {
                    document.getElementById('progress_link').href='clear.html';
                    prebox.innerHTML='<a href="clear.html"><div class="text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-[5rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg></div></a>';
                }
            }

            updateStampProgress();

            const popup = document.getElementById('pop-up');
            const popBar = document.getElementById('pop-bar');
            const YesPop = document.getElementById('yes-pop');
            const NoPopup = document.getElementById('no-pop');
            const clearButton = document.getElementById('clear-localstorage-button');
            const body = document.body;


            let start = 0;
            let isSwip = false;

            const closePopup = () => {
                popBar.classList.add('translate-y-full');
                body.classList.remove('overflow-hidden');
                updateStampProgress();

                setTimeout(() => {
                    popup.classList.add('opacity-0',  'pointer-events-none');
                    popBar.classList.remove('transition-transform', 'duration-250', 'ease-in', 'translate-y-0');
                }, 300);
            }

            // ok
            YesPop.addEventListener('click', () => {
                localStorage.removeItem('{{eventName}}');
                closePopup();
                window.location.href = 'index.html';
            });
            // iie
            NoPopup.addEventListener('click', () => {
                closePopup();
            });
            // hiraku
            clearButton.addEventListener('click', () => {
                popup.classList.remove('opacity-0',  'pointer-events-none');
                body.classList.add('overflow-hidden');
                
                // 遅延
                setTimeout(() => {
                    popBar.classList.remove('translate-y-full');
                    popBar.classList.add('translate-y-0', 'transition-transform', 'duration-250', 'ease-in');
                }, 10);
                
            });
            // haikei
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup();
                }
            });
            

            
            popBar.addEventListener('touchstart', (e) => {
                isSwip = true;
                start = e.touches[0].clientY;
                popBar.classList.remove('transition-transform', 'duration-250', 'ease-in');
            });

            popBar.addEventListener('touchmove', (e) => {
                if(isSwip == false) {
                    return;
                }
                const current_y = e.touches[0].clientY;
                const kyori = current_y - start;

                if(kyori > 0) {
                    popBar.style.transform = "translateY(" + kyori + "px)";
                }

            });

            popBar.addEventListener('touchend', (e) => {
                if(isSwip == false) {
                    return;
                }

                const end = e.changedTouches[0].clientY;
                const kyori = end - start;
                // 10vh
                const lengthLine = (window.innerHeight * 10) / 100;
                popBar.style.transform = '';
                popBar.classList.add('transition-transform', 'duration-250', 'ease-in');
                
                // shita ni sagaru
                if(kyori > lengthLine) {
                    closePopup();
                } else {
                    popBar.classList.add('translate-y-0');
                    popBar.addEventListener('transitionend', () => {
                        popBar.classList.remove('transition-transform', 'ease-in');
                    }, { once: true });
                }

                isSwip = false
            });


            // QRコードリーダーの部分　__NKyotsu
            const Urpop = document.getElementById('UrCodeReader');
            const Urpopbar = document.getElementById('Ur-bar');
            const UrMsg = document.getElementById('URstatus');
            let mediaStream = null;
            let contentWidth;
            let contentHeight;
            let isScanning = false;
            
            // iOSのためのQRコードリーダーのコード　__NKyotsu
            function isIOS() {
                if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                    return true;
                }
                return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
            }

            if(isIOS()) {
                Urpopbar.classList.add('h-[80vh]');
            }else {
                Urpopbar.classList.add('h-[90vh]');
            }


            // QRコードの部分の続き　__NKyotsu
            let Urstart = 0;
            let UrisSwip = false;

            const UrclosePopup = () => {
                stopCamera(); // カメラを停止
                Urpopbar.classList.add('translate-y-full');
                body.classList.remove('overflow-hidden');
                updateStampProgress();

                setTimeout(() => {
                    Urpop.classList.add('opacity-0',  'pointer-events-none');
                    Urpopbar.classList.remove('transition-transform', 'duration-250', 'ease-in', 'translate-y-0');
                }, 300);
            }
            // hiraku
            prebox.addEventListener('click', () => {
                if(checkAllStamps() == false) {
                    startCamera(); // カメラを起動
                    Urpop.classList.remove('opacity-0',  'pointer-events-none');
                body.classList.add('overflow-hidden');
                
                // 遅延
                setTimeout(() => {
                    Urpopbar.classList.remove('translate-y-full');
                    Urpopbar.classList.add('translate-y-0', 'transition-transform', 'duration-250', 'ease-in');
                }, 10);
                } 
            });
            // haikei
            Urpop.addEventListener('click', (e) => {
                if (e.target === Urpop) {
                    UrclosePopup();
                }
            });

            const UrCloseButton = document.getElementById('Ur-close-button');
            if (UrCloseButton) {
                UrCloseButton.addEventListener('click', () => {
                    UrclosePopup();
                });
            }
            
            Urpopbar.addEventListener('touchstart', (e) => {
                UrisSwip = true;
                Urstart = e.touches[0].clientY;
                Urpopbar.classList.remove('transition-transform', 'duration-250', 'ease-in');
            });

            Urpopbar.addEventListener('touchmove', (e) => {
                if(UrisSwip == false) {
                    return;
                }
                const current_y = e.touches[0].clientY;
                const kyori = current_y - Urstart;

                if(kyori > 0) {
                    Urpopbar.style.transform = "translateY(" + kyori + "px)";
                }
            });

            Urpopbar.addEventListener('touchend', (e) => {
                if(UrisSwip == false) {
                    return;
                }

                const end = e.changedTouches[0].clientY;
                const kyori = end - Urstart;
                // 10vh
                const lengthLine = (window.innerHeight * 10) / 100;
                Urpopbar.style.transform = '';
                Urpopbar.classList.add('transition-transform', 'duration-250', 'ease-in');
                
                // shita ni sagaru
                if(kyori > lengthLine) {
                    UrclosePopup();
                } else {
                    Urpopbar.classList.add('translate-y-0');
                    Urpopbar.addEventListener('transitionend', () => {
                        Urpopbar.classList.remove('transition-transform', 'ease-in');
                    }, { once: true });
                }

                UrisSwip = false
            });

            // JSQRの部分　__NKyotsu
            const stopCamera = () => {
                isScanning = false; // スキャンを停止
                if (mediaStream) {
                    mediaStream.getTracks().forEach(track => track.stop());
                    mediaStream = null;
                }
            };

            // カメラ映像のキャンバス表示
            const cvs = document.getElementById('camera-canvas');
            const ctx = cvs.getContext('2d');
            const rectCvs = document.getElementById('rect-canvas');
            const rectCtx =  rectCvs.getContext('2d');
            let UrCodeData = '';

            const canvasUpdate = () => {
                cvs.width = contentWidth;
                cvs.height = contentHeight;
                ctx.drawImage(video, 0, 0, contentWidth, contentHeight);
                requestAnimationFrame(canvasUpdate);
            }

            // 二次元コードの検出
            const checkImage = () => {
                if (!isScanning) return; // スキャンが停止されていたら処理を終了
                const imageData = ctx.getImageData(0, 0, contentWidth, contentHeight);
                const code = jsQR(imageData.data, contentWidth, contentHeight);

                if (code && code.data) {
                    drawRect(code.location);
                    UrCodeData = code.data;
                    if(UrMsg) {
                        UrMsg.textContent = "二次元コード：" + UrCodeData;
                    }
                    // root_URL
                    const RootURL = '{{rootURL}}';
                    if(code.data.startsWith(RootURL)) {
                        window.location.href = code.data;
                        stopCamera();
                    }else {
                        UrMsg.textContent = '正しいコードではありません';
                    }
                } else {
                    rectCtx.clearRect(0, 0, contentWidth, contentHeight);
                    UrCodeData = '';
                    const UrMsg = document.getElementById('URstatus');
                    if(UrMsg) {
                        UrMsg.textContent = "大きくはっきりと";
                    }
                }
                setTimeout(()=>{ checkImage() }, 500);
            }

            // 四辺形の描画
            const drawRect = (location) => {
                rectCvs.width = contentWidth;
                rectCvs.height = contentHeight;
                drawLine(location.topLeftCorner, location.topRightCorner);
                drawLine(location.topRightCorner, location.bottomRightCorner);
                drawLine(location.bottomRightCorner, location.bottomLeftCorner);
                drawLine(location.bottomLeftCorner, location.topLeftCorner)
            }

            // 線の描画
            const drawLine = (begin, end) => {
                rectCtx.lineWidth = 4;
                rectCtx.strokeStyle = "#F00";
                rectCtx.beginPath();
                rectCtx.moveTo(begin.x, begin.y);
                rectCtx.lineTo(end.x, end.y);
                rectCtx.stroke();
            }

            let video = null
            const startCamera = () => {
                document.getElementById('permission-denied').style.display = 'none';

                // Webカメラの起動
                video = document.getElementById('video');
                const wrapper = document.getElementById('wrapper');

                const constraints = {
                    audio: false,
                    video: {
                        facingMode: "environment",
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    }
                };

                const urBar1 = document.getElementById('Ur-bar-1');
                const urBar2 = document.getElementById('Ur-bar-2');

                const ParStyle = window.getComputedStyle(Urpopbar);
                const urBar1Style = window.getComputedStyle(urBar1);
                const urBar3Style = window.getComputedStyle(UrMsg);

                const parentPaddingTop = parseFloat(ParStyle.paddingTop);
                const parentPaddingBottom = parseFloat(ParStyle.paddingBottom);
                const parentHeight = parseFloat(ParStyle.height);

                const urBar1Height = parseFloat(urBar1Style.height);
                const urBar1MarginBottom = parseFloat(urBar1Style.marginBottom);
                const urBar3Height = urBar3Style ? parseFloat(urBar3Style.height) : 0;
                const urBar3MarginTop = urBar3Style ? parseFloat(urBar3Style.marginTop) : 0;

                const urBar2Height = parentHeight - parentPaddingTop - parentPaddingBottom - urBar1Height - urBar1MarginBottom - urBar3Height - urBar3MarginTop;


                if (urBar2Height > 0) {
                    urBar2.style.height = urBar2Height + "px";
                }

                navigator.mediaDevices.getUserMedia(constraints)
                    .then((stream) => {
                        mediaStream = stream; // ストリームを保存
                        video.srcObject = stream;
                        video.onloadeddata = () => {
                            video.play();
                            
                            contentWidth = video.videoWidth;
                            contentHeight = video.videoHeight;
                            

                            isScanning = true; // スキャンを開始
                            canvasUpdate();
                            checkImage();
                        }
                    }).catch((e) => {
                        console.error(e);
                        document.getElementById('permission-denied').style.display = 'flex';
                    });
            };`,
progressPage : `
    <main class="mr-16 mb-16 ml-16 mt-20" id="mains">
        <div>
            <div class="flex items-center mb-10 pointer-events-none" id="check">
                <div id="ico">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>

                </div>
                <h1 class="text-7xl ml-8">チェック済み</h1>

            </div>
            <div id="checked-list" class="duration-200 ease-in">
                
            </div>
        </div>
        <div class="mt-16">
            <div class="flex items-center mb-10 pointer-events-none" id="uncheck">
                <div id="unico">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>

                </div>
 
                <h1 class="text-7xl ml-8">未チェック</h1>
            </div>
            <div id="unchecked-list" class="duration-200 ease-in">
                
            </div>
        </div>
        <div class="m-auto hidden" id="clear-btn-box">
            <div id="sent-clear-button" class="mt-16 rounded-full bg-yellow-300 cursor-pointer py-8  w-full ">
                <p  class="text-5xl text-center font-bold py-4">クリア画面を表示する</p>
            </div>
        </div>
    </main>
    
    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>            
            
        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] bg-gray-200 flex justify-center items-center rounded-full pt-2 pb-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                    </svg>

                    <div class="absolute top-0 right-0 hidden "  id="exclamation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <p class="text-4xl">進捗</p>
            </div>
            
        </a>
    </footer>
    
<div id="UrCodeReader" class="transition-opacity duration-[5ms] ease-out opacity-0 pointer-events-none fixed inset-0 z-30 backdrop-blur-md bg-black/50 flex justify-center items-end">
    <div id="Ur-bar" class="w-full bg-white rounded-t-4xl shadow-2xl pb-20 pt-20 flex flex-col items-center transition-transform translate-y-full">
        <div class="flex items-center justify-between w-[88%] mb-8" id="Ur-bar-1">
            <svg id="Ur-close-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <p class="text-[4.2rem]">スキャン</p>
            <div class="size-20"></div>
        </div>
        <div class="flex justify-center items-center flex-col w-full h-full " id="Ur-bar-2">
            <div id="wrapper" class="relative w-[90vw] h-full" style="display: block;">
                <video id="video" autoplay muted playsinline class="w-full h-full z-80 object-contain"></video>
                <canvas id="camera-canvas" class="absolute top-0 left-0 w-full h-full z-80 object-contain"></canvas>
                <canvas id="rect-canvas" class="absolute top-0 left-0 w-full h-full"></canvas>
                <div id="permission-denied" class="absolute top-0 left-0 bg-gray-100/50 w-[90vw] h-full flex justify-center items-center flex-col z-70">
                    <div class="" style="display: block;">
                        <div class="flex justify-center flex-col items-center text-center gap-4">
                            <div class="flex justify-center items-center flex-col">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                                </svg>
                                <h1 class="text-6xl font-bold text-slate-800 tracking-tight py-4">権限がありません</h1>
                            </div>
                            <p class="text-4xl m-auto py-6 mx-20">
                                再読み込みをして、ポップアップなどからカメラの使用を許可するか、端末のカメラから二次元コードを読み込んでください。
                            </p>
                        </div>  
                    </div>          
                </div>
            </div>
        </div>
        <div id="URstatus" class="text-5xl mt-12">
            大きくはっきりと
        </div>
    </div>
</div>`,
    progressScript: `const fotter = document.getElementById('fotter-items');
            let FotterHeight = fotter.offsetHeight;

            const mainElement = document.getElementById('mains');
            const amari = (window.innerHeight * 7) / 100;
            mainElement.style.marginBottom = FotterHeight + amari + "px";


            // check-pointに関わるコード __NKyotsu
            const checkpoints = [
                {{checkPoints}}
                // { id: 'stamp1', name: 'チェックポイント１' },
                // { id: 'stamp2', name: 'チェックポイント２' },
                // { id: 'stamp3', name: 'チェックポイント３' }
            ];

            const checkedList = document.getElementById('checked-list');
            const uncheckedList = document.getElementById('unchecked-list');

            const check = document.getElementById('check');
            const uncheck = document.getElementById('uncheck');

            let isCheckHide = false;
            const ico = document.getElementById('ico');
            const unico = document.getElementById('unico');

            check.addEventListener('click', () => {
                if(isCheckHide) {
                    const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>';
                    
                    checkedList.classList.remove('opacity-0',  'pointer-events-none');
                    setTimeout(() => {
                        ico.innerHTML = " " + checkIcon + " ";
                        checkedList.classList.toggle('hidden');
                        isCheckHide = false;
                    }, 210);

                }else {
                    const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>';

                    checkedList.classList.add('opacity-0',  'pointer-events-none');
                    setTimeout(() => {
                        ico.innerHTML = " " + checkIcon + " "; 
                        checkedList.classList.add('hidden');
                        isCheckHide = true;
                    }, 210);
                }
            });

            let isUnCheckHide = false;

            uncheck.addEventListener('click', () => {
                if(isUnCheckHide) {
                    const uncheckIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>';

                    uncheckedList.classList.remove('opacity-0',  'pointer-events-none');
                    setTimeout(() => {
                        unico.innerHTML = " " + uncheckIcon + " ";

                        uncheckedList.classList.remove('hidden');
                        isUnCheckHide = false;
                    }, 210);
                }else {
                    const uncheckIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>';

                    uncheckedList.classList.add('opacity-0',  'pointer-events-none');
                    setTimeout(() => {
                        unico.innerHTML = " " + uncheckIcon + " ";

                        uncheckedList.classList.add('hidden');
                        isUnCheckHide = true;
                    }, 210);
                }
            });

            checkpoints.forEach(checkpoint => {
                const sakuttoRallyData = JSON.parse(localStorage.getItem('{{eventName}}')) || [];
                const checkpointData = sakuttoRallyData.find(item => item.id === checkpoint.id);
                const isChecked = checkpointData ? checkpointData.status : false;
                const listContainer = isChecked ? checkedList : uncheckedList;
                const icon = isChecked 
                // 色はここで変えれるお
                    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>'
                    : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';

                if(isChecked) {
                    checkedList.classList.add('py-12');
                    ico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>';
                    check.classList.remove('pointer-events-none');
                }else {
                    uncheckedList.classList.add('py-12');
                    unico.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>';
                    uncheck.classList.remove('pointer-events-none');
                }
                const element = document.createElement('div');
                element.className = 'flex items-center pt-8 pb-8 mb-8 rounded-full ring-4 ring-black';
                element.classList.add('prebox-item');
                element.innerHTML = 
                    '<div class="ml-8 flex items-center pt-1 pb-1">' +
                        icon +
                        '<div class="ml-8 "><h2 class="text-5xl">' +
                        checkpoint.name +
                    '</h2></div></div>';
                listContainer.appendChild(element);
            });

            const SentClear = document.getElementById('sent-clear-button');
            const ClearBox = document.getElementById('clear-btn-box');

            function checkAllStamps() {
            const storageKey = '{{eventName}}';
            const currentData = JSON.parse(localStorage.getItem(storageKey)) || [];
            return currentData.length >= {{stampCount}};
            }
            
            const exclamation = document.getElementById('exclamation');

            if(checkAllStamps()) {
                ClearBox.classList.remove('hidden');
                exclamation.classList.remove('hidden');
            }

            SentClear.addEventListener('click', () => {
                window.location.href = 'clear.html';
            });

            // qr-code の部分  __NKyotsu
            const Urpop = document.getElementById('UrCodeReader');
            const Urpopbar = document.getElementById('Ur-bar');
            const UrMsg = document.getElementById('URstatus');
            let mediaStream = null;
            let contentWidth;
            let contentHeight;
            let isScanning = false;
            const preboxItems = document.querySelectorAll('.prebox-item');
            const body = document.body;

            function isIOS() {
                if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                    return true;
                }
                return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
            }

            if(isIOS()) {
                Urpopbar.classList.add('h-[80vh]');
            }else {
                Urpopbar.classList.add('h-[90vh]');
            }


            let Urstart = 0;
            let UrisSwip = false;

            const UrclosePopup = () => {
                stopCamera(); // カメラを停止
                Urpopbar.classList.add('translate-y-full');
                body.classList.remove('overflow-hidden');

                setTimeout(() => {
                    Urpop.classList.add('opacity-0',  'pointer-events-none');
                    Urpopbar.classList.remove('transition-transform', 'duration-250', 'ease-in', 'translate-y-0');
                }, 300);
            }
            // hiraku
            preboxItems.forEach(item => {
                item.addEventListener('click', () => {
                    if(checkAllStamps() == false) {
                        startCamera(); // カメラを起動
                        Urpop.classList.remove('opacity-0',  'pointer-events-none');
                        body.classList.add('overflow-hidden');
                    
                        // 遅延
                        setTimeout(() => {
                            Urpopbar.classList.remove('translate-y-full');
                            Urpopbar.classList.add('translate-y-0', 'transition-transfoUm', 'duration-250', 'ease-in');
                        }, 10);
                    } 
                });
            });
            // haikei
            Urpop.addEventListener('click', (e) => {
                if (e.target === Urpop) {
                    UrclosePopup();
                }
            });

            const UrCloseButton = document.getElementById('Ur-close-button');
            if (UrCloseButton) {
                UrCloseButton.addEventListener('click', () => {
                    UrclosePopup();
                });
            }
                       
            Urpopbar.addEventListener('touchstart', (e) => {
                UrisSwip = true;
                Urstart = e.touches[0].clientY;
                Urpopbar.classList.remove('transition-transform', 'duration-250', 'ease-in');
            });

            Urpopbar.addEventListener('touchmove', (e) => {
                if(UrisSwip == false) {
                    return;
                }
                const current_y = e.touches[0].clientY;
                const kyori = current_y - Urstart;

                if(kyori > 0) {
                    Urpopbar.style.transform = "translateY(" + kyori + "px)";
                }
            });

            Urpopbar.addEventListener('touchend', (e) => {
                if(UrisSwip == false) {
                    return;
                }

                const end = e.changedTouches[0].clientY;
                const kyori = end - Urstart;
                // 10vh
                const lengthLine = (window.innerHeight * 10) / 100;
                Urpopbar.style.transform = '';
                Urpopbar.classList.add('transition-transform', 'duration-250', 'ease-in');
                
                // shita ni sagaru
                if(kyori > lengthLine) {
                    UrclosePopup();
                } else {
                    Urpopbar.classList.add('translate-y-0');
                    Urpopbar.addEventListener('transitionend', () => {
                        Urpopbar.classList.remove('transition-transform', 'ease-in');
                    }, { once: true });
                }

                UrisSwip = false
            });
            const permission = document.getElementById('permission-denied');

            // jsqrのカメラ部分 __NKyotsu
            const stopCamera = () => {
                isScanning = false; // スキャンを停止
                permission.classList.remove('hidden');

                if (mediaStream) {
                    mediaStream.getTracks().forEach(track => track.stop());
                    mediaStream = null;
                }
            };

            // カメラ映像のキャンバス表示
            const cvs = document.getElementById('camera-canvas');
            const ctx = cvs.getContext('2d');
            const rectCvs = document.getElementById('rect-canvas');
            const rectCtx =  rectCvs.getContext('2d');
            let UrCodeData = '';

            const canvasUpdate = () => {
                cvs.width = contentWidth;
                cvs.height = contentHeight;
                ctx.drawImage(video, 0, 0, contentWidth, contentHeight);
                requestAnimationFrame(canvasUpdate);
            }

            // 二次元コードの検出
            const checkImage = () => {
                if (!isScanning) return; // スキャンが停止されていたら処理を終了
                const imageData = ctx.getImageData(0, 0, contentWidth, contentHeight);
                const code = jsQR(imageData.data, contentWidth, contentHeight);

                if (code && code.data) {
                    drawRect(code.location);
                    UrCodeData = code.data;
                    const UrMsg = document.getElementById('URstatus');
                    if(UrMsg) {
                        UrMsg.textContent = "二次元コード：" + UrCodeData;
                    }
                    // root_URL
                    const RootURL = '{{rootURL}}';
                    if(code.data.startsWith(RootURL)) {
                        window.location.href = code.data;
                        stopCamera();
                    }else {
                        UrMsg.textContent = '正しいコードではありません';
                    }
                } else {
                    rectCtx.clearRect(0, 0, contentWidth, contentHeight);
                    UrCodeData = '';
                    const UrMsg = document.getElementById('URstatus');
                    if(UrMsg) {
                        UrMsg.textContent = "大きくはっきりと";
                    }
                }
                setTimeout(()=>{ checkImage() }, 500);
            }

            // 四辺形の描画
            const drawRect = (location) => {
                rectCvs.width = contentWidth;
                rectCvs.height = contentHeight;
                drawLine(location.topLeftCorner, location.topRightCorner);
                drawLine(location.topRightCorner, location.bottomRightCorner);
                drawLine(location.bottomRightCorner, location.bottomLeftCorner);
                drawLine(location.bottomLeftCorner, location.topLeftCorner)
            }

            // 線の描画
            const drawLine = (begin, end) => {
                rectCtx.lineWidth = 4;
                rectCtx.strokeStyle = "#F00";
                rectCtx.beginPath();
                rectCtx.moveTo(begin.x, begin.y);
                rectCtx.lineTo(end.x, end.y);
                rectCtx.stroke();
            }

            const startCamera = () => {
                document.getElementById('permission-denied').style.display = 'none';

                // Webカメラの起動
                const video = document.getElementById('video');
                const wrapper = document.getElementById('wrapper');

                const constraints = {
                    audio: false,
                    video: {
                        facingMode: "environment",
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    }
                };

                const urBar1 = document.getElementById('Ur-bar-1');
                const urBar2 = document.getElementById('Ur-bar-2');

                const ParStyle = window.getComputedStyle(Urpopbar);
                const urBar1Style = window.getComputedStyle(urBar1);
                const urBar3Style = window.getComputedStyle(UrMsg);

                const parentPaddingTop = parseFloat(ParStyle.paddingTop);
                const parentPaddingBottom = parseFloat(ParStyle.paddingBottom);
                const parentHeight = parseFloat(ParStyle.height);

                const urBar1Height = parseFloat(urBar1Style.height);
                const urBar1MarginBottom = parseFloat(urBar1Style.marginBottom);
                const urBar3Height = urBar3Style ? parseFloat(urBar3Style.height) : 0;
                const urBar3MarginTop = urBar3Style ? parseFloat(urBar3Style.marginTop) : 0;

                const urBar2Height = parentHeight - parentPaddingTop - parentPaddingBottom - urBar1Height - urBar1MarginBottom - urBar3Height - urBar3MarginTop;
                

                if (urBar2Height > 0) {
                    urBar2.style.height = urBar2Height + "px";
                }

                navigator.mediaDevices.getUserMedia(constraints)
                    .then((stream) => {
                        permission.classList.add('hidden');
                        mediaStream = stream; // ストリームを保存
                        video.srcObject = stream;
                        video.onloadeddata = () => {
                            video.play();
                            
                            contentWidth = video.videoWidth;
                            contentHeight = video.videoHeight;
                            

                            isScanning = true; // スキャンを開始
                            canvasUpdate();
                            checkImage();
                        }
                    }).catch((e) => {
                        console.error(e);
                        document.getElementById('permission-denied').style.display = 'flex';
                    });
            };`,
checkPointMain: `

        <main class="mr-16 mb-16 ml-16 mt-20 ">
            <div class="mt-6 mp-5">
                <h1 class="text-6xl text-center pb-8">スタンプを獲得しました</h1>
            </div>
            <!-- <img src="img/seikou_syukufuku_man.png" alt="スタンプ1の画像" class="w-full h-auto mt-10 mb-10 rounded-lg shadow-lg"> -->
            <p class="text-4xl">{{stampMessage}}</p>
            <div class="w-full pt-8 pb-8 rounded-full mt-16  bg-yellow-300 text-center">
                <a href="progress.html" class="rounded-full font-bold text-5xl ">
                    進捗を確認する
                </a>
            </div>
        </main>
    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>            
        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">     
        <div class="flex flex-col items-center justify-center">
            <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                    <div class="absolute top-0 right-0 hidden"  id="exclamation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
            </div>
            <p class="text-4xl">進捗</p>
        </div>
        </a>
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', () => {

            // add data __NKyotsu
            function AddlocalStorage(id, newStatus) {
                const storageKey = '{{eventName}}';

                let currentData = JSON.parse(localStorage.getItem(storageKey)) || [];

                const targetItem = currentData.find(item => item.id === id);

                if (targetItem) {
                    targetItem.status = newStatus;
                } else {
                    currentData.push({ id: id, status: newStatus });
                }

                localStorage.setItem(storageKey, JSON.stringify(currentData));
            }
            function checkAllStamps() {
            const storageKey = '{{eventName}}';
                const currentData = JSON.parse(localStorage.getItem(storageKey)) || [];
                return currentData.length >= {{stampCount}};
            }
            
            AddlocalStorage('{{stampId}}',true);

            if (checkAllStamps()) {
                window.location.href = 'clear.html';
            }
        });
    </script> 
    </body>
</html>`,
clearPage: `<!DOCTYPE html>
<html lang="ja">
    <head>
        <title>クリア</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="contents!!!!!">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    </head>
    <body>
        <header class="mt-12">
            <div class="relative rounded-full mt-10 h-fit py-16 shadow-xl mx-6 flex items-center bg-white" >
                <h1 class="text-6xl text-center absolute left-1/2">
                   クリア!!
                </h1>    
            </div>
        </header>

        <noscript class="mr-16 ml-16 mt-10">
        <p class="text-4xl ">JSが有効でないようです。このサイトを満足に使うにはJavaScriptを有効にしてください。</p>
    </noscript>
    
        <main class="mr-16 mb-16 ml-16 mt-20 " id="mains">
            <div class="mt-6 mp-5">
                <h1 class="text-6xl text-center pb-8">🎉 お疲れ様でした!! 🎉</h1>
            </div>
             <div class="flex items-center justify-center">
            <div id="clear-localstorage-button" class="mt-16 rounded-full bg-yellow-300 cursor-pointer pt-6 pb-6 transition-colors duration-300 w-full ">
                <p  class="text-5xl text-center font-bold pt-3">終了する</p>
                <p class="text-3xl text-center ">※スタンプラリーデータは削除されます</p>
            </div>
        </main> 
    <footer class="h-fit shadow-xl bg-white rounded-lg bottom-10 left-6 right-6 flex items-center fixed pt-3 pb-3 justify-center m-auto" id="fotter-items">
        <a href="map.html" class="w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <p class="text-4xl">地図</p>
            </div>
            
        </a>
        <a href="index.html" class="relative w-[33%] h-[75%] pt-3 pb-3 flex items-center justify-center">
            <span class="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] border-l border-gray-500"></span>
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <p class="text-4xl">ホーム</p>
            </div>
            <span class="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] border-r border-gray-500"></span>
        </a>
        <a href="progress.html" class=" w-[33%] flex flex-col items-center justify-center pt-3 pb-3">
            <div class="flex flex-col items-center justify-center">
                <div class="w-[19vw] flex justify-center items-center rounded-full pt-2 pb-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    <div class="absolute top-0 right-0 hidden"  id="exclamation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <p class="text-4xl">進捗</p>
            </div>
        </a>
    </footer> 
        <!-- boyake ha koko -->
        <div id="pop-up" class="transition-opacity duration-[5ms] ease-out opacity-0 pointer-events-none fixed inset-0 z-30 backdrop-blur-md bg-black/50 flex justify-center items-end">
    <div id="pop-bar" class=" w-full h-[40vh] bg-white rounded-t-4xl shadow-2xl p-6 flex flex-col justify-between items-center transition-transform translate-y-full">
        <div class="flex justify-center items-center flex-col">
            <div class="flex justify-center w-full">
                <div class="w-[20vw] h-4 bg-gray-300 rounded-full"></div>
            </div>

            <div class="flex flex-col items-center text-center w-[84%] mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-18 mt-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <h1 class="text-7xl font-bold my-4">確認</h1>
                <p class="text-5xl mt-4 text-gray-600">本当にスタンプのすべてのデータを削除しても大丈夫でしょうか？</p>
            </div>
        </div>
        <div class="w-full flex flex-col items-center h-[auto] mb-12">
            <button id="yes-pop" class="rounded-full bg-gray-300 py-5 text-6xl w-[85%] my-6 ">はい</button>
            <button id="no-pop" class="rounded-full bg-gray-300 py-5 text-6xl w-[85%] my-6 ">いいえ</button>
        </div>
    </div>
</div>
        <script>
            function checkAllStamps() {
            const storageKey = '{{eventName}}';
            const currentData = JSON.parse(localStorage.getItem(storageKey)) || [];
            return currentData.length >= {{stampCount}};
            }

            if(checkAllStamps() == false) {
                window.location.href = '403.html';
            }

        document.addEventListener('DOMContentLoaded', () => {
            const fotter = document.getElementById('fotter-items');
            let FotterHeight = fotter.offsetHeight;

            const mainElement = document.getElementById('mains');
            // 7vhを示している。
            const amari = (window.innerHeight * 7) / 100;
            mainElement.style.marginBottom = FotterHeight + amari + "px";

            const popup = document.getElementById('pop-up');
            const popBar = document.getElementById('pop-bar');
            const YesPop = document.getElementById('yes-pop');
            const NoPopup = document.getElementById('no-pop');
            const clearButton = document.getElementById('clear-localstorage-button');
            const body = document.body;


            const exclamation = document.getElementById('exclamation');


            if(checkAllStamps()) {
                exclamation.classList.remove('hidden');
            }

            // __NKyotsu delete data-localstrage
            let start = 0;
            let isSwip = false;

            let isOktoHome = false;

            const closePopup = () => {
                popBar.classList.add('translate-y-full');
                body.classList.remove('overflow-hidden');

                setTimeout(() => {
                    popup.classList.add('opacity-0',  'pointer-events-none');
                    popBar.classList.remove('transition-transform', 'duration-250', 'ease-in', 'translate-y-0');
                }, 300);

                setTimeout(() => {
                    if(isOktoHome) {
                    window.location.href = 'index.html';

                }
                }, 300);
                
            }


            // ok
            YesPop.addEventListener('click', () => {
                localStorage.removeItem('{{eventName}}');
                closePopup();
                isOktoHome = true;
            });
            // iie
            NoPopup.addEventListener('click', () => {
                closePopup();
            });
            // hiraku
            clearButton.addEventListener('click', () => {
                popup.classList.remove('opacity-0',  'pointer-events-none');
                body.classList.add('overflow-hidden');
                
                // 遅延
                setTimeout(() => {
                    popBar.classList.remove('translate-y-full');
                    popBar.classList.add('translate-y-0', 'transition-transform', 'duration-250', 'ease-in');
                }, 10);
                
            });
            // haikei
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup();
                }
            });
            
            popBar.addEventListener('touchstart', (e) => {
                isSwip = true;
                start = e.touches[0].clientY;
                popBar.classList.remove('transition-transform', 'duration-250', 'ease-in');
            });

            popBar.addEventListener('touchmove', (e) => {
                if(isSwip == false) {
                    return;
                }
                const current_y = e.touches[0].clientY;
                const kyori = current_y - start;

                if(kyori > 0) {
                    popBar.style.transform = "translateY(" + kyori + "px)";
                }
            });

            popBar.addEventListener('touchend', (e) => {
                if(isSwip == false) {
                    return;
                }

                const end = e.changedTouches[0].clientY;
                const kyori = end - start;
                // 10vh
                const lengthLine = (window.innerHeight * 10) / 100;
                popBar.style.transform = '';
                popBar.classList.add('transition-transform', 'duration-250', 'ease-in');
                
                // shita ni sagaru
                if(kyori > lengthLine) {
                    closePopup();
                } else {
                    popBar.classList.add('translate-y-0');
                    popBar.addEventListener('transitionend', () => {
                        popBar.classList.remove('transition-transform', 'ease-in', "translate-y-0");
                    }, { once: true });
                }
                isSwip = false
            });
        });

        </script>
    </body>
</html>`,
error404: `<!DOCTYPE html>
<html lang="ja">
    <head>
        <title>404</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="contents!!!!!">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style type="text/tailwindcss">
    </style>
    </head>
    <body class="overflow-hidden">
        
        <noscript class="mr-16 ml-16 mt-10">
            <p class="text-4xl ">JSが有効でないようです。このサイトを満足に使うにはJavaScriptを有効にしてください。</p>
        </noscript>

        <main class="h-lvh y-overflow-hidden w-full flex justify-center flex-col items-center">
            <div class="flex justify-center flex-col items-center text-center">
                <p class="text-9xl py-12">404</p>
                    
                <h1 class="text-5xl font-bold text-slate-800 tracking-tight py-4">ページが見つかりません</h1>
                <p class="text-4xl m-auto py-6 mx-20">
                    お探しのページは存在しないか、移動または削除された可能性があります。以下のボタンを押して、ホームへお戻りください。
                </p>
            </div>
            
        </main>
        <footer class="h-[8.5vh] fixed bottom-10 left-8 right-8 flex justify-center items-center">
                <div id="send-home-button" class=" rounded-full bg-blue-300 cursor-pointer py-8  w-[90%] ">
                    <p  class="text-5xl text-center font-bold ">ホームへ戻る</p>
                </div>
        </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            
            // home-button __NKyotsu
            document.getElementById('send-home-button').addEventListener('click', () => {
                window.location.href = 'index.html';
            });
            
            
        });
    </script>
    </body>
</html>
`,
error403:`<!DOCTYPE html>
<html lang="ja">
    <head>
        <title>403</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="contents!!!!!">
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <style type="text/tailwindcss"></style>
    </head>
    <body class="overflow-hidden">
    <noscript class="mr-16 ml-16 mt-10">
        <p class="text-4xl ">JSが有効でないようです。このサイトを満足に使うにはJavaScriptを有効にしてください。</p>
    </noscript>

        <main class="h-lvh y-overflow-hidden w-full flex justify-center flex-col items-center">
            <div class="flex justify-center flex-col items-center text-center">
                <p class="text-9xl py-12">403</p>
                <h1 class="text-5xl font-bold text-slate-800 tracking-tight py-4">アクセスが禁止されています</h1>
                <p class="text-4xl m-auto py-6 mx-20">
                    お探しのページへの、アクセスは許可されていません。以下のボタンを押して、ホームへお戻りください。
                </p>
            </div>
            
        </main>
        <footer class="h-[8.5vh] fixed bottom-10 left-8 right-8 flex justify-center items-center">
                <div id="send-home-button" class=" rounded-full bg-blue-300 cursor-pointer py-8  w-[90%] ">
                    <p  class="text-5xl text-center font-bold ">ホームへ戻る</p>
                </div>
        </footer> 

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            
            // __NKyotsu home-button
            document.getElementById('send-home-button').addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        });
    </script>
    </body>
</html>
`,
scriptHead: `<script>document.addEventListener('DOMContentLoaded', () => {`,
scriptFoot: `});</script></body></html>`
};