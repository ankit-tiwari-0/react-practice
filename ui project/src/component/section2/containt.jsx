import React from 'react'
import Left from './left'
import Right from './right'

const Containt = () => {
  return (
    <div className='pb-20 pt-6 flex gap-6 justify-between items-center h-full  px-16 bg-amber-700'>
      
      <Left />
      <Right />
    </div>
  )
}

export default Containt