import React, { useState } from 'react'
import Reacts from './react'

const App = () => {

  //**Object */ const [num, setnum] = useState({user:'Ankit', age:20});
 
  //  const clickch = () => {
  //   const  newnum = {...num};
  //   newnum.user = "Noorin"
  //   newnum.age = 20
  //   setnum(newnum)
  //  }  

  const [arry, setarry] = useState([10,20,40])

  const btnclick = () =>{
    const newarray = [...arry]
    newarray.push(100)

    setarry(newarray)
  }

  return (
    <div>
      <h1>{arry}</h1>
      <button onClick={btnclick}>click</button>
      {/* <button onClick={clickch}>Click</button> object*/}
    
      < Reacts />
    </div>
  )
}

export default App