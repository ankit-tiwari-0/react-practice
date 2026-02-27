import React from 'react'

const IMage = () => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex flex-col justify-center items-center'>1</h2>
                <div>
                    <p className='text-lg leading-normal text-white mb-10 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni esse, necessitatibus a consequatur voluptates aliquam.</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white fornt-semibold px-8 pi-2 rounded-full'>Satisfied</button>
                        <button className='bg-blue-600 text-white fornt-semibold px-4 pi-3 rounded-full'><i className="ri-arrow-right-line"></i></button>

                    </div>
                </div>

            </div>
  )
}

export default IMage