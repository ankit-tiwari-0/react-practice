import React, { useState } from 'react'

const App = () => {
    const [num, setnum] = useState(0)
    function innam (){
        setnum(num +1)
    }

    function denam (){
        setnum(num -1)
    }

    function enam (){
        setnum(num +5)
    }
  return (
    <div className='kk'>
      <div className='count'>
        <h1>{num}</h1> 
        <div className='btn'>
             <button onClick={innam}>Increase</button> 
              <button onClick={denam}>Decrease</button> 
              <button onClick={enam}>+5</button> 
            </div> 
       
        </div>  
     

    </div>
  )
}

export default App