import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Authentication() {

    const [isLogin, setIsLOgin] = useState(true);

    function showRegister() {
        setIsLOgin(false);
    }
    function showLogin() {
        setIsLOgin(true);
    }

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center 
    w-screen h-screen transition-[height] ${isLogin ? "sm:h-[480px]" : "sm:h-[530px]"} duration-[0.2s] [ease] bg-transparent p-10 
     backdrop-blur-[30px] rounded-lg shadow shadow-white/80 text-white sm:w-[420px]`}>
        
        <div className={`w-full ${!isLogin ? "transition-none -translate-x-[40rem] sm:-translate-x-[25rem]" : "transition duration-[0.18s] [ease] translate-x-0"}`}>
            <form action="" method="post">
                <h1 className="text-center text-3xl font-bold">Login</h1>

                {//Add this if you want to!!
                /* <div className="relative w-full h-12 my-3">
                    <input type="text" name="login-username" id="login-username" required placeholder="Username"
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaUser className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div> */}
                <div className="relative w-full h-12 my-3">
                    <input type="email" name="email" id="login-email" required placeholder="Email" 
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>
                <div className="relative w-full h-12 my-3">
                    <input type="password" name="password" id="login-password" required placeholder="Password" 
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaLock className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex justify-between items-center text-sm -mt-1 mb-4 mx-0 ">
                    <div className="flex justify-between items-center">
                        <input type="checkbox" name="remember-me" id="login-remember-me" className="accent-white mr-[2px]" />
                        <label htmlFor="login-remember-me">Remember me</label>
                    </div>
                    <a href="#" className="hover:underline font-semibold">Forgot password?</a>
                </div>

                <button type="submit" className="bg-white active:bg-slate-300 text-black w-full h-11 border-none outline-none rounded-[40px] shadow cursor-pointer font-bold">Login</button>

                <p className="text-sm text-center mt-5 mb-0 mx-0">
                    Don't have an account?{" "}
                    <a href="#" className="font-semibold hover:underline" onClick={showRegister}>
                        Register
                    </a>
                </p>

            </form>

            <div className="mt-7">
                <div className="flex justify-center">
                    <div aria-hidden="true" className="w-[28%] sm:w-20 flex items-center"><div className="w-full h-[1px] bg-white/30"></div></div>
                    <div className='flex justify-center font-medium text-base'><span className="px-6">Or continue with</span></div>
                    <div aria-hidden="true" className="w-[28%] sm:w-20 flex items-center"><div className="w-full h-[1px] bg-white/30"></div></div>
                </div>

                <div className="grid gap-4 grid-cols-2 mt-6">
                    <a href="#" className="flex items-center justify-center gap-2 px-3 py-2 rounded-[40px] shadow shadow-white/80 hover:bg-green-950 active:bg-green-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                    </svg>
                    <span className="font-semibold text-base">Google</span>
                    </a>

                    <a href="#" className="flex items-center justify-center gap-2 px-3 py-2 rounded-[40px] shadow shadow-white/80 hover:bg-blue-950 active:bg-blue-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-base">GitHub</span>
                    </a>
                </div>
            </div>
        </div>

        <div className={`w-full absolute p-10 ${!isLogin ? "transition duration-[0.18s] [ease] translate-x-0" : "transition-none translate-x-[40rem] sm:translate-x-[25rem]"}`}>
            <form action="" method="post">
                <h1 className="text-center text-3xl font-bold">Registration</h1>

                <div className="relative w-full h-12 my-3">
                    <input type="text" name="username" id="signup-username" required placeholder="Username"
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaUser className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>
                <div className="relative w-full h-12 my-3">
                    <input type="email" name="email" id="signup-email" required placeholder="Email" 
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>
                <div className="relative w-full h-12 my-3">
                    <input type="password" name="password" id="signup-password" required placeholder="Password" 
                    className="w-full h-full p-5 pr-11 bg-transparent border-2 border-solid border-white/[0.1] rounded-[40px] outline-none 
                    text-white text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FaLock className="absolute right-5 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex justify-between items-center text-sm -mt-1 mb-4 mx-0 ">
                    <div className="flex justify-between items-center">
                        <input type="checkbox" name="remember-me" id="agree-terms" className="accent-white mr-[2px]" />
                        <label htmlFor="agree-terms">I agree to the terms & conditions</label>
                    </div>
                </div>

                <button type="submit" className="bg-white active:bg-slate-300 text-black w-full h-11 border-none outline-none rounded-[40px] shadow cursor-pointer font-bold">
                    Register
                </button>

                <p className="text-sm text-center mt-5 mb-0 mx-0">
                    Already have an account?{" "}
                    <a href="#" className="font-semibold hover:underline" onClick={showLogin}>
                        Login
                    </a>
                </p>

            </form>

            <div className="mt-7">
                <div className="flex justify-center">
                    <div aria-hidden="true" className="w-[28%] sm:w-20 flex items-center"><div className="w-full h-[1px] bg-white/30"></div></div>
                    <div className='flex justify-center font-medium text-base'><span className="px-6">Or continue with</span></div>
                    <div aria-hidden="true" className="w-[28%] sm:w-20 flex items-center"><div className="w-full h-[1px] bg-white/30"></div></div>
                </div>

                <div className="grid gap-4 grid-cols-2 mt-6">
                    <a href="#" className="flex items-center justify-center gap-2 px-3 py-2 rounded-[40px] shadow shadow-white/80 hover:bg-green-950 active:bg-green-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                    </svg>
                    <span className="font-semibold text-base">Google</span>
                    </a>

                    <a href="#" className="flex items-center justify-center gap-2 px-3 py-2 rounded-[40px] shadow shadow-white/80 hover:bg-blue-950 active:bg-blue-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <span className="font-semibold text-base">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authentication;