import React from 'react'
import Image from '../assets/Images/premium.png'



const premium = () => {
  return (
    <div className=' md:h-[700px] h-[800px] md:w-[100%] md:max-w-full max-w-xl bg-gray-800 relative '>
      <div className='  md:h-[60px] md:w-[100%]  absolute '>
        <img  className=' md:ml-[670px] md:h-[450px] md:w-[850px] ml-[-50px] w-full h-full max-w-[540px] md:max-w-full' src={Image} alt="" />
        <div className=' md:max-w-[580px] md:h-[500px] text-white md:mt-[-400px] md:ml-[150px] max-w-[500px] flex flex-col  md:items-start items-center  '>
          <h1 className='md:text-5xl text-2xl font-bold  max-w-[480px] '>Listen without limits. Try 2 months of Premium for ₹119. </h1>
          <h1 className='mt-[10px]' >Only ₹119/month after. Cancel anytime.</h1>
          <div className='mt-[25px] gap-[20px] flex flex-col md:flex-row'>
            <button className='bg-white text-black h-[50px] md:w-[200px] w-[430px] font-bold rounded-3xl hover:scale-110 transition-transform ease-in-out'>Try 2 months for ₹119</button>
            <button className='bg-black text-white h-[50px] md:w-[200px] w-[430px] rounded-3xl font-bold hover:scale-110 transition-transform ease-in-out'>View all plans</button>
          </div>
          <h1 className='text-[12px] w-[320px] mt-[20px]'>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven’t tried Premium before. Terms apply.</h1>
          <div className='md:mt-[170px] md:ml-[300px] md:w-[580px]  max-w-xl flex flex-col items-center mt-[50px] '>
            <h1 className='md:text-4xl text-3xl text-white font-bold'>Experience the difference</h1>
            <h1 className='md:text-2xl text-xl flex-wrap mt-2'>Go Premium and enjoy full control of your listening.</h1>
            <h1 className='md:text-2xl text-xl'>Cancel anytime.</h1>

          </div>

        </div>
    

      </div>
 
      
    </div>
  )
}

export default premium
