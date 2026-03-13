import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex py-2 items-center px-8 bg-cyan-700 justify-between'>
         <h1 className='text-2xl font-bold'>Ankit</h1>
         <div  className='flex gap-10'>
            <Link className='text-lg font-bold' to='/'>Home</Link>
            <Link className='text-lg font-bold' to='/about'>About</Link>
            <Link className='text-lg font-bold' to='/contact'>Contact</Link>
         </div>
    </div>
  )
}

export default Nav