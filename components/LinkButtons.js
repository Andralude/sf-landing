const LinkButtons = ({ playStoreLink, loginLink, appStoreLink, hero }) => {
    return (
        <div className={"relative z-50 flex flex-col items-center justify-center h-64 pt-7 lg:pt-0 lg:flex-row gap-8" + (hero ? " md:pt-64" : '') }>
            <a href={playStoreLink} target="_blank">
                <button className="py-3 text-2xl flex font-semibold text-center text-secondary-500 transition-all rounded-xl shadow-2xl hover:text-white hover:bg-cyan-900 hover:ring-0 pl-6 pr-6 bg-gray-50 focus:outline-none ring-4 ring-secondary-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 408 467.8"><linearGradient id="a" gradientUnits="userSpaceOnUse" x2="261.746" y1="112.094" y2="112.094"><stop offset="0" stopColor="#63be6b" /><stop offset=".506" stopColor="#5bbc6a" /><stop offset="1" stopColor="#4ab96a" /></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1=".152" x2="179.896" y1="223.393" y2="223.393"><stop offset="0" stopColor="#3ec6f2" /><stop offset="1" stopColor="#45afe3" /></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="179.896" x2="407.976" y1="229.464" y2="229.464"><stop offset="0" stopColor="#faa51a" /><stop offset=".387" stopColor="#fab716" /><stop offset=".741" stopColor="#fac412" /><stop offset="1" stopColor="#fac80f" /></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1.744" x2="272.296" y1="345.521" y2="345.521"><stop offset="0" stopColor="#ec3b50" /><stop offset="1" stopColor="#e7515b" /></linearGradient><path d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7z" fill="url(#a)" /><path d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1z" fill="url(#b)" /><path d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z" fill="url(#c)" /><path d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4z" fill="url(#d)" /></svg>
                    <p className="ml-4">PLAY STORE</p>
                </button>
            </a>
            <a href={loginLink} target="_blank">
                <button className="py-4 px-8 text-2xl flex font-semibold text-center text-white transition-all bg-secondary-600 rounded-xl shadow-2xl hover:bg-secondary-700 focus:outline-none lg:font-medium ">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" /></svg>
                    <p className="ml-4">WEB APP</p>
                </button>
            </a>
            <a href={appStoreLink} target="_blank">
                <button className="py-3 text-2xl font-semibold flex text-center text-secondary-500 transition-all rounded-xl shadow-2xl hover:text-white hover:bg-cyan-900 hover:ring-0 pl-6 pr-6 bg-gray-50 focus:outline-none ring-4 ring-secondary-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"></path></svg>
                    <p className="ml-4">APP STORE</p>
                </button>
            </a>
        </div>
    );
}

export default LinkButtons;