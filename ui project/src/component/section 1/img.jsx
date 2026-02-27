import React from 'react'
import IMage from './IMage.con'

const Img = () => {
    return (
       <div className="relative w-[260px] h-[480px] overflow-hidden rounded-3xl">
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661749996118-799eff98b27d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           
           <IMage  />
        </div>
    )
}

export default Img