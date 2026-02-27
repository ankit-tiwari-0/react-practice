import React from 'react'
import Img from './img'
const Imgcontaner = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-5 overflow-x-auto flex flex-nowrap gap-6 justify-between rounded-3xl '>
      {
        props.User.map(function(els,idx){
            return  <Img key={idx} id={idx} img={els.img} tag={els.tag} 
            color={els.color} />
        })
      }
      
      
    </div>
  )
}

export default Imgcontaner