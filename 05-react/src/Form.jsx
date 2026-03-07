import React, { useState } from 'react'

const Form = () => {
 const [titlee, settitlee] = useState('')
    const  submitHandler = (e) => {
      e.preventDefault()
      console.log('Form Sub', titlee);
      settitlee('')
      
    }
  return (
    <div>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
            <input type="text" placeholder='ENter your name' 
            value={titlee} onChange={(e)=>{
               settitlee(e.target.value) 
            }}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form