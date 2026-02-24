import React from 'react'
import {Bookmark} from 'lucide-react'
const Cards = () => {
  return (
        <div className='cards'>
      <div className='top'>
       <img src="https://img.freepik.com/premium-photo/amazon-logo-icon-illustration-vector_895118-6116.jpg?w=2000" alt="" />
       <button>save <Bookmark  size={15} /></button>
       <div>
        
       </div>
      </div>
      <div className='center'>
       <h3>Amazon <span>5 days ago</span></h3>
       <h2>Senior UI/UX Designer</h2> 
       <div className='tag'>
        <h4>Part-Time</h4>
        <h4>Senior Level</h4>
        </div>  
      </div>
      <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply now</button>
      </div>
     </div>
  )
}

export default Cards