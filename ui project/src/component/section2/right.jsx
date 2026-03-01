import React from 'react'
const data = [43, 54, 71, 92, 119, 155, 194, 243, 301];

const Right = () => {
  return (
    <div className='h-full w-2/3 p-5 overflow-x-auto flex flex-nowrap gap-6 justify-between rounded-3xl border-1 '>
     <div className="w-full flex items-end justify-between px-6 relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full">
        26,7% CAGR
      </div>

      {data.map((value, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div
            className="w-4 bg-black rounded-t-lg"
            style={{ height: `${value}px` }}
          ></div>
          <span className="text-xs">{2019 + index}</span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Right