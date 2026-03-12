import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])
  const [index, setindex] = useState(1)

async function getdata () {
const response = await   axios.get(`https://picsum.photos/v2/list?page=${index}&limit=32`)
 setdata(response.data);

}

useEffect(function(){
  getdata()
})

let printdata = <h3 className='text-gray-400 text-2xl'>Loading....</h3>
if(data.length>0){
  printdata = data.map(function(ele,idx) {
    return <div  key={idx}>
      <a href={ele.url} target='-blank'>
        <div className='lg:h-40 lg:w-44 h-30 w-30 overflow-hidden rounded-2xl'>
           <img className='h-full w-full object-cover'  src={ele.download_url} alt="" />    
        </div>
        <h2 className='font-bold lg:text-lg text-sm'>{ele.author}</h2>
      </a>
     
    </div>
  })

}
  return (
    <div className='bg-black overflow-auto h-screen text-white '>
         <div className='flex flex-wrap  justify-center gap-4 p-2'>
           {
            printdata
           }
         </div>
         <div className='flex justify-center  gap-6 items-center p-4'>
          <button onClick={()=>{
           if (index>1){
            setindex(index-1)
           }
          }} className='bg-amber-300 text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded-xl'>Prev</button>
          <h1>{index}</h1>
          <button onClick={()=>{
           setindex(index+1)
          }} className='bg-amber-300 text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded-xl'>Next</button>
         </div>
    </div>
  )
}

export default App
