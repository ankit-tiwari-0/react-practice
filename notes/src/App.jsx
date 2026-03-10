import React from 'react'

const App = () => {
  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log("ffff");
    
  }
  return (
    <div className='h-screen bg-black text-white p-10 lg:flex'>
      <form onSubmit={(e) =>{
        SubmitHandler(e)
      }} className='flex lg:w-1/2 px-10 lg:items-start flex-col  gap-6 '>
       <h1 className='text-3xl lg:text-5xl font-bold'>Your Notes</h1>
             <input 
        type="text"
         placeholder='Enter Notes Heading' 
         className='px-5  w-2/3  lg:w-full font-medium py-2 border-2 rounded outline-none'
         />
         
        <textarea
        type="text" 
        className='px-5  w-2/3  lg:w-full  py-2 border-2 font-medium rounded outline-none'
        placeholder='Write Ditails' />

        <button className='bg-white cursor-pointer hover:bg-red-200 hover:text-amber-50 w-2/3  lg:w-full text-black px-5 py-2 rounded font-bold'>Add NOTES</button>

       
      </form>
      <div className='lg:w-1/2 lg:border-l-2 h-full p-10 '>
        <h1 className='text-3xl lg:text-5xl pb-10 font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white'></div>
            <div className='h-52 w-40 rounded-2xl bg-white text-amber-300'>ggggggg</div>
        </div>
      </div>

    </div>
  )
}

export default App