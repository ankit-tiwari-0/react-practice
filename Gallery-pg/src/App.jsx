import React from 'react'

const App = () => {

 function getdata (){
  console.log("aa gyaa");
  
 }

  return (
    <div className='bg-black h-screen text-white '>
         <button onClick={getdata}
         className='bg-green-600 active:scale-95 rounded py-5 px-5 m-5 text-white '
         >Get</button>
    </div>
  )
}

export default App