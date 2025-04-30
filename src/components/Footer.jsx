import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-gray-800 h-full md:h-[250px]  flex border-t-2 flex-wrap md:flex-nowrap  '>
        <div className='ml-[30px]  h-[100%] w-[300px] py-5 text-gray-400 gap-[10px] flex flex-col'>
            <h1 className=' font-extrabold text-white '>Company</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>About</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Jobs</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>For the Record</h1>
        </div> 
        <div className='ml-[30px]  h-[100%] w-[300px] py-5 text-gray-400 gap-[10px] flex flex-col'>
            <h1 className=' font-extrabold text-white '>Communities</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>For artists</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Devolopers</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Advertising</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Investors</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Vendors</h1>
        </div> 
        <div className='ml-[30px]  h-[100%] w-[300px] py-5 text-gray-400 gap-[10px] flex flex-col'>
            <h1 className=' font-extrabold text-white '>Useful links</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Support</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Free Mobile App </h1>
           
        </div> 
        <div className='ml-[30px]  h-[100%] w-[300px] py-5 text-gray-400 gap-[10px] flex flex-col'>
            <h1 className=' font-extrabold text-white '>Spotify Plans</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Premium Individual</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Premium Duo </h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Premium Family </h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Premium Student</h1>
            <h1 className=' font-bold  hover:text-white hover:underline '>Spotify Free</h1>
           
        </div> 
        <div className='text-white flex mt-[30px] gap-[15px] text-[18px] '>
            <div className='h-[35px] w-[35px] bg-gray-600 rounded-2xl flex justify-center items-center'>
            <FaInstagram />


            </div>

            <div className='h-[35px] w-[35px] bg-gray-600 rounded-2xl flex justify-center items-center'>
            <FaTwitter />

            </div>
            <div className='h-[35px] w-[35px] bg-gray-600 rounded-2xl flex justify-center items-center'>
           
            <FaFacebookF />


            </div>
        </div>
      
    </div>
  )
}

export default Footer
