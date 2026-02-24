import React from 'react'
import {User} from 'lucide-react'
const Card = () => {
  return (
    <div className="card">
         <div className='top'>
        <h3>available</h3>
        <h2>$40/hr</h2>
      </div>
      <div className="ceter">
        <img src="https://media.istockphoto.com/id/1476203627/photo/portrait-of-a-sensual-young-woman-with-long-black-hair-on-white-background.jpg?s=612x612&w=is&k=20&c=87muRhu2fHNJZLQ3hHgZk3mN60T-DGbG4966ojO18KQ=" alt="" />
        <h1>Svetlana Anyukova</h1>
        <h4>Mobile designer</h4>
        <button> <User /> Freelancer</button>
      </div>
      <div className="bottom">
        <div className='h2'>
          <h4>pppppp</h4>
          <h4>pppppp</h4>
          <h4>pppppp</h4>
          <h4>+2</h4>
        </div>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nihil dolores sed a sapiente aliquam.</p>
        </div>
        <div className='line'>
        </div>
          <h3>VIEW PROFILE</h3>
      </div>
      </div>
  )
}

export default Card