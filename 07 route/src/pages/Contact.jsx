import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div >
      <div className='flex gap-8 py-5 justify-center'>
        <Link to='/contact/men'>Men</Link>
        <Link to='/contact/women'>Women</Link>
      </div>
         <Outlet />
      
    </div>
  )
}

export default Contact