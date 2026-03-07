import React, { useState } from 'react'
import Form from './Form'

const Reacts = () => {
   const [num, setnum] = useState({user:"ankit", Age:21})

   const btnclick = () =>{
    //newway setnum(prev=>({...prev,Age:50}))
    const newnum = {...num}
    newnum.user = "Chutiya"
    newnum.Age = 4000
    setnum(newnum)
   }

  return (
    <div>
        <h1>{num.user} {num.Age}</h1>
        <button onClick={btnclick}>Newway</button>

        <Form />
    </div>
  )
}

export default Reacts