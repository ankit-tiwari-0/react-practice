import React from 'react'

const App = () => {
  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log("ffff");
    
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) =>{
        SubmitHandler(e)
      }} className='flex justify-between  flex-col p-10 gap-4 '>
    
             <input 
        type="text"
         placeholder='Enter Notes Heading' 
         className='px-5  w-full font-medium py-2 border-2 rounded outline-none'
         />
         
        <textarea
        type="text" 
        className='px-5  w-full py-2 border-2 font-medium rounded outline-none'
        placeholder='Write Ditails' />

        <button className='bg-white w-full text-black px-5 py-2 rounded font-bold'>Add NOte</button>

       
      </form>

    </div>
  )
}

export default App