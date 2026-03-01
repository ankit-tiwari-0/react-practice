import React from 'react'
import Leftcard from './leftcard'

const Left = () => {
  return (
    <div className='flex flex-col justify-between  h-full  w-full  '>
      <div className='p-5'>
        <h3 className='mb-6 
                       text-2xl 
                       md:text-3xl 
                       lg:text-5xl 
                       font-bold leading-tight'>E-com market is expected <br /><span>to exceed <span className='bg-green-300 rounded-xl px-2'>$300B </span> in 2027</span></h3>
        <p className=' w-[90%] text-base md:text-lg lg:text-xl py-5 text-gray-600'><span><i class="ri-flashlight-line text-3xl text-blue-400 pr-3"></i></span>In india MSME contribution to eTailing sales <br /> is expected  to grow between  60%-70%  annually <br /> to reach USD50Bn by FY 2027 </p>
      </div>
      {/* Cards Section */}
      <div className=" flex  gap-5 m-5">
        
        <Leftcard
          bgColor="bg-blue-500"
          textColor="text-white"
          percent="26,7%"
          description="Expected annual growth of eCom market size"
        />

        <Leftcard
          bgColor="bg-lime-400"
          textColor="text-black"
          percent="25%"
          description="E-com share of the organized retail in 2020"
        />

      </div>
    </div>
  )
}

export default Left