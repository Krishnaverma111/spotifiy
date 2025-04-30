import React, { useState } from 'react'
import { FaSpotify } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoBrowsers } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";




export default function Navbar() {
  const [icon,Seticon]=useState(false)
  const Changeicon=()=>{
    Seticon(!icon)
  }
  const nav=[
    {to:"support",name:"Support"},
    {to:"premium",name:"Premium"},
    {to:"download",name:"Download"}
    

  ]
  return (
  <>
  
    <nav className='flex bg-black w-full text-white gap-4 h-[60px] items-center md:w-[100%] realtive'>
  
    <FaSpotify className='text-3xl ml-4 ' />
    <IoHome className='text-3xl ml-4 hover:scale-110 transition-transform duration-300 ease-in-out ' />
    <div className='lg:w-[500px] bg-gray-900 h-[40px] flex items-center rounded-l-2xl rounded-r-2xl hover:border-2 hover:border-white active:border-2  w-[250px] '>
      <CiSearch  className='text-white ml-2 text-2xl '/>
      <input className='ml-3 w-[150px] h-[20px]   focus:none outline-none border-r-2 border-r-white lg:w-[400px] lg:h-[20px] pr-4' placeholder='What do you want to play?'></input>
      <IoBrowsers className='ml-2 text-2xl pr-2'/>

      
    </div>
      <div className="text-gray-300  gap-4  ml-40 border-r-2 border-r-white w-[250px] hidden md:flex">
        <h1 className='hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out '><Link to="support">Support</Link></h1>
        <h1 className='hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out'><Link to="Premium">Premium</Link></h1>
        <h1 className='hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out'><Link to="download">Download</Link></h1>

      </div>
      <div className='md:flex gap-[20px] text-gray-300 ml-[10px] items-center hidden'>
        <div className='flex items-center  hover:scale-110 transition-transform duration-300 ease-in-out'>
          <MdOutlineFileDownload />
          <h1 className='hover:text-white font-semibold '>Install App</h1>
        </div>
        <h1 className='hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out ml-[10px]'><Link to="signup">Sign up</Link></h1>
        <button className='bg-white text-black h-[40px] w-[100px] font-bold hover:scale-110 transition-transform duration-300 ease-in-out ml-[10px] rounded-3xl'>Log in</button>


      </div>
      <button onClick={Changeicon} className='w-[30px]  ml-12 text-2xl lg:hidden'>
        {icon?<RxCross1 />:<GiHamburgerMenu />}
      </button>
      {icon && (
      <div className="text-gray-300 flex flex-col bg-gray-800 gap-[30px] absolute ml-[370px] mt-[210px] h-[150px] w-[115px] items-center py-3">
        {nav.map((item,key)=>(
        <h1  key={key} className='hover:text-white font-semibold hover:scale-110 transition-transform duration-300 ease-in-out '><Link to={item.to}>{item.name}</Link></h1>
     
       
      ))}
      </div>
    )}
</nav>
</>


    
  )
  }


