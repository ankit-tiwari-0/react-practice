import React from 'react'
import IMage from './IMage.con'

const Img = (props) => {
    return (
       <div className="relative w-[260px] h-[480px] overflow-hidden rounded-3xl shrink-0">
            <img className='h-full w-full object-cover' src= {props.img} alt="" />
           
           <IMage id={props.id} tag={props.tag} color={props.color} />
        </div>
    )
}

export default Img