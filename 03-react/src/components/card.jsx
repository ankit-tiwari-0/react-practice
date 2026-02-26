import React from 'react'
import {User} from 'lucide-react'
const Card = (props) => {
  return (
    <div className="card">
         <div className='top'>
        <h3 className={props.status === "busy" ? "busy" : "available"}>{props.status}</h3>
        <h2> ${props.ratePerHour}/hr</h2>
      </div>
      <div className="ceter">
        <img src= {props.img} alt="" />
        <h1>{props.name}</h1>
        <h4>{props.profession} </h4>
        <button> <User /> {props.type}</button>
      </div>
      <div className="bottom">
        <div className='h2'>
           {props.skills.slice(0, 3).map((skill, index) => (
           <h4 key={index}>{skill}</h4>
             ))}
         {props.skills.length > 3 && (
         <h4>+{props.skills.length - 3}</h4>
               )}
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div className='line'>
        </div>
          <h3>VIEW PROFILE</h3>
      </div>
      </div>
  )
}

export default Card