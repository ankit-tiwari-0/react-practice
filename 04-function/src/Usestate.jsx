import React, { useState } from 'react'

const App = () => {
    const [num, setnum] = useState(0);
    const [read, write] = useState("ankit")
    const changename =()  =>{
       write('ll')
    }

  return (
    <div>
        <h1>Value of num is  {num} Name of the person is  {read}</h1>
        <button  onClick={()=>{setnum(num+1); changename() }}>Click</button>
    </div>
  )
}

export default App