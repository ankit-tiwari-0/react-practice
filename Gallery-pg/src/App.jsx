import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])

async function getdata () {
const response = await   axios.get('https://picsum.photos/v2/list?page=2&limit=30')
 setdata(response.data);

}

let printdata = "no img available"
if(data.length>0){
  printdata = data.map(function(ele,idx){
    return <div  key={idx}>
      <a href="">
        <div className='lg:h-40 lg:w-44 h-30 w-30 overflow-hidden rounded-2xl'>
           <img className='h-full w-full object-cover'  src={ele.download_url} alt="" />    
        </div>
        <h2 className='font-bold lg:text-lg text-sm'>{ele.author}</h2>
      </a>
     
    </div>
  })

}
  return (
    <div className='bg-black h-screen text-white '>
         <button onClick={getdata}
         className='bg-green-600 active:scale-95 rounded py-5 px-5 m-5 text-white '
         >Get</button>

         <div className='flex flex-wrap gap-4 px-12'>
           {
            printdata
           }
         </div>
    </div>
  )
}

export default App