import React from 'react'
import Left from './Left'
import Imgcontaner from './Imgcontaner'

const Center = (props) => {
  return (
    <div className='pb-20 pt-6 flex gap-6 justify-between items-center flex-1  px-16'>  

    <Left />
    <Imgcontaner  User={props.User}  />
    </div>
  )
}

export default Center