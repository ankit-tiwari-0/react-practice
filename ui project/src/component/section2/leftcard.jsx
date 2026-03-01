import React from 'react'

const Leftcard = ({ bgColor, textColor, percent, description }) => {
  return (
      <div className={`relative w-1/3 max-w-xs p-2 h-50 rounded-3xl flex  ${bgColor} ${textColor} overflow-hidden`}>

      {/* White Cut Shape */}
      <div className="absolute -top-6 -right-6 w-22 h-22 bg-gray-100 rounded-full "></div>

      {/* Arrow Button */}
      <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10">
        <i className="ri-arrow-right-up-line text-lg text-black"></i>
      </div>

      {/* Content */}
      <div className='flex  ' >
         <h2 className="text-3xl  md:text-4xl font-bold mb-3">
        {percent}
      </h2>
        <div className=' flex items-center'>
         <p className="  text-sm md:text-base leading-relaxed opacity-90 max-w-[200px]">
        {description}
      </p>
        </div>
      

      </div>
     
    </div>
  )
}

export default Leftcard