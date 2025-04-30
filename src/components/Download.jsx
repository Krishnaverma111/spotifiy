import React from 'react'
import banner from '../assets/Images/bannerdownload.jpg'
import Appimg from '../assets/Images/microsoft.svg' 
import microsoftimg from '../assets/Images/playstore.png'
import playstoreimg from '../assets/Images/playstore.svg'
import platformimg from '../assets/Images//platform_cherries.jpg'

const Download = () => {
  return (
    <div className='h-[888px] md:h-[1220px] w-full mt-4 relative'>
      <img className="md:h-[520px] h-[300px] max-w-[487px] object-cover md:max-w-full" src={banner} alt="" />
      <div className='absolute top-0  md:h-[200px] md:w-[800px]  flex md:ml-[400px] md:mt-[250px] mt-[50px] '>
      <div className=' flex flex-col items-center justify-center w-full gap-7'>
        <h1 className='text-white md:text-5xl text-3xl font-bold'>Download spotify</h1>
        <h1 className='text-white md:text-3xl  text-xl font-bold'>Play millions of songs and podcasts on your device.</h1>
        <h1 className='text-white text-xl'><u>Download directly from spotify</u></h1>
      </div>
      </div>
      <div className='bg-white h-[300px] md:max-w-full max-w-xl flex flex-col md:items-start items-center justify-center gap-7'>
       <h1 className=' md:ml-[550px] md:text-3xl text-2xl font-bold'>Listen on mobile and tablet,too</h1>
       <h1 className=' md:ml-[550px] '>Using Spotify on your phone or tablet is free, easy, and fun.</h1>
       <div className='w-full h-[50px] flex items-center justify-center gap-2'>
        <img  src={Appimg} alt="" />
        <img  className='h-[40px] w-[150px]' src={playstoreimg} alt="" />
      
        <img  src={microsoftimg} alt="" />
      

       </div>

      </div>
      <div className='relative md:h-[500px] h-[300px]  md:max-w-full max-w-[488px] '>
        <img  className="md:h-[415px] w-full h-[300px] " src={platformimg} alt="" />
        <div className='absolute top-0 md:ml-[450px] text-white md:mt-[250px] mt-[170px] md:h-[180px] md:w-[750px] flex flex-col items-center justify-center gap-7'>
          <h1 className='md:text-4xl text-xl font-bold'>One account,listen everywhere</h1>
          <div className='flex md:font-bold justify-center  gap-3 md:gap-7 flex-wrap '>
          <h1>Mobile</h1>
          <h1>Computer</h1>
          <h1>Tablet</h1>
          <h1>Car</h1>
          <h1>Playstation</h1>
          <h1>Xbox</h1>
          <h1>TV</h1>
          <h1>Speaker</h1>
          <h1>Web player</h1>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default Download
