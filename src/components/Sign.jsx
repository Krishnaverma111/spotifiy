import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";






const Sign = () => {
  return (
    <div className='h-screen w-full  bg-black flex justify-center '>
        <div className=' h-full w-[350px] flex flex-col items-center flex-wrap'>
        <FaSpotify className='text-5xl text-white' />
        <h1 className='text-5xl text-white font-bold'>Sign up to </h1>
        <h1 className='text-5xl text-white font-bold'>start listening </h1>

        <div className='mt-14  h-[110px]  w-full font-bold flex flex-col justify-between' >
        <h1 className="text-white ml">Email addrres</h1>
        <input className='border-[1px] border-gray-500 h-[50px] w-full rounded-[3px] placeholder:text-gray-400 px-2 text-white' placeholder='name@domain.com' type="text" />
        <h1 className='text-green-400'><u>Use phone number instead</u></h1>
        </div>
         <button className='bg-green-400 h-[50px] w-full font-bold rounded-4xl mt-4'>Next</button>
         <div className='h-[10px]  w-[100%] mt-6 flex justify-between items-center'>
            <div className=' h-[1px] w-[40%] bg-gray-400'>

            </div>
            <h1 className='text-white'>or</h1>
            <div className=' h-[1px] w-[40%] bg-gray-400'>

            </div>
          </div>
            <button className='bg-black h-[50px] w-full font-bold rounded-4xl mt-14 text-white border-[1px] border-gray-400 flex items-center  gap-[70px]'>
              <FaGoogle className='ml-6 text-2xl' />
              Sign in with Google
              </button>
            <button className='bg-black h-[50px] w-full font-bold rounded-4xl mt-2 text-white border-[1px] border-gray-400 flex items-center  gap-[70px]'>
              <FaFacebook className='ml-6 text-2xl' />
              Sign in with facebook
            </button>
            <button className='bg-black h-[50px] w-full font-bold rounded-4xl mt-2 text-white border-[1px] border-gray-400 flex items-center  gap-[70px]'>
              <FaApple  className='ml-6 text-2xl' />
              Sign in with Apple
            </button>
        </div>
        
      
    </div>
  )
}

export default Sign
