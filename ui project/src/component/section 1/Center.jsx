import React from 'react'
import Left from './Left'
import Imgcontaner from './Imgcontaner'

const Center = () => {
  return (
    <div className='py-10 flex gap-6 justify-between items-center flex-1  px-16'>  

    <Left />
    <Imgcontaner />
    </div>
  )
}

export default Center