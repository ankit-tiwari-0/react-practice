import React, { useEffect, useState } from 'react'
import Useeffect2 from './Useeffect2'

const App = () => {
    const [num, setnum] = useState(0)
    const [nu2, setnu2] = useState(500)

    useEffect (function () {
        console.log('useeffect is running ');
        
    }, [num])
  return (
    <div>
     <h1>{num}</h1>
     <h1>{nu2}</h1>
     <button onMouseEnter={()=>{
        setnum(num+1)
     }} 
     onMouseLeave={()=>{
        setnu2(nu2+100)
     }}>Click</button>
    </div>
  )
}

export default App