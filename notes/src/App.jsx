import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])
  const SubmitHandler = (e) =>{
    e.preventDefault()
    
    const copytask = [...task]

    copytask.push({title,detail})

    settask(copytask)
    
    settitle('')
    setdetail('')
    
  }

  const deletenote = (idx) =>{
      const deletet = [...task]

      deletet.splice(idx,1)
      settask(deletet)
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
         value={title}
         onChange={(e) =>{
         settitle( e.target.value)
         }}
         />
         
        <textarea
        type="text" 
        className='px-5  w-2/3  lg:w-full  py-2 border-2 font-medium rounded outline-none'
        placeholder='Write Ditails'
        value={detail}
        onChange={(e) =>{
          setdetail(e.target.value)
        }}
        />

        <button className='bg-white active:bg-gray-400 active:scale-105  cursor-pointer hover:bg-red-200 hover:text-amber-50 w-2/3  lg:w-full text-black px-5 py-2 rounded font-bold'>Add NOTES</button>

       
      </form>
      <div className='lg:w-1/2 lg:border-l-2 h-full p-10 '>
        <h1 className='text-3xl lg:text-5xl pb-10 font-bold'>Recent Notes</h1>
        <div id='right' className='flex flex-wrap gap-5 mt-5 h-full overflow-auto '>
            
            {task.map(function(ele ,idx) {

              return  <div key={idx} className='flex justify-between flex-col items-start relative h-60 w-40 rounded-2xl text-black py-3 px-4 bg-[url("https://i.pinimg.com/1200x/17/ca/fc/17cafcdcc33ae085d4b5bad69149df7f.jpg")] bg-cover bg-center'>
                <div className='w-full overflow-hidden'>
                  <h3 className='leading-tight  text-2xl font-bold break-all line-clamp-2'>{ele.title}</h3>
                <p className=' mt-3 leading-tight text-sm font-medium text-gray-500 break-all line-clamp-7'>{ele.detail}</p>
                </div>
                <button onClick={() => {
                  deletenote(idx)
                }} className='w-full cursor-pointer active:scale-100 bg-red-500  text-white py-1 text-xs rounded-2xl font-bold'>DELETE</button>
              </div>
            })}
            
           
            
        </div>
      </div>

    </div>
  )
}

export default App