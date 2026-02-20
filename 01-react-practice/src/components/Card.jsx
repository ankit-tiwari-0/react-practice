import React from 'react'
const Card = (props) => {
  console.log(props.user);
  
  return (
    <div className='parent'>
      <div className='miya'>
     <img src={props.img} alt="" />   
     <h1>{props.user} Ji</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <button>View Props</button>
    </div>
    </div>
    
  )
}

export default Card