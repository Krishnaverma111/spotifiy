import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Support = () => {
  return (
    <div className='h-[1000px] relative max-w-xl flex sm:flex-col md:flex-row  sm:items-center min-h-screen bg-black  border-t-2 border-gray-800  '>
      <div className='md:ml-[500px] ml-[40px] mt-20'>
      <h1 className='text-gray-400'>Spotify support</h1>
      <h1 className='text-white text-5xl font-bold mt-3'>How can we help you ?</h1>
      <h1 className='text-white text-2xl font-bold mt-14'><u>Log in</u> <span className='text-gray-400'>For faster help</span></h1>
      <div className='bg-white md:w-[500px] w-[350px] h-[45px] flex mt-14 rounded-[8px]'>
        <div className='w-[50px] h-[45px] flex items-center justify-center text-3xl '>
          <CiSearch  />
        </div>
      <input className='bg-white md:w-[500px]  w-[250px] h-[45px] rounded-[5px] outline-none border-none' type="text" placeholder='Search'/>

      </div>
      <div className='bg-gray-800 h-[400px] w-[350px] md:w-[500px] mt-[50px] rounded-[7px]  text-white'>
        <div className='h-[67px] border-b-[1px] border-gray-400 flex items-center '>
          <CiCreditCard1  className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>Payment & billing</h1>

        </div>
        <div className='h-[67px] border-b-[1px] border-gray-400 flex items-center'>
          <CiUser className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>Manage your account</h1>

        </div>
        <div className='h-[67px] border-b-[1px] border-gray-400 flex items-center'>
          <CiUser className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>Premium plans</h1>

        </div>


      <div className='h-[67px] border-b-[1px] border-gray-400 flex items-center'>
          <CiUser className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>In-app features</h1>

        </div>
        <div className='h-[67px] border-b-[1px] border-gray-400 flex items-center'>
          <CiUser className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>Devices & troubleshooting</h1>

        </div>
        <div className='h-[67px]  flex items-center'>
          <CiUser className='ml-[20px] text-2xl text-green-400'/>
          <h1 className='font-bold ml-[10px]'>Safety & privacy</h1>

        </div>

      </div>
    </div>
    
      
    </div>
  )
}

export default Support
