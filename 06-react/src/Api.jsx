import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [dataa, setdataa] = useState([])

//    async function getdata(){
//     const response =   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       console.log(response);
      
//     }

//   const getdata = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//       const dataa = await response.json()
//     console.log( dataa);
      
//      }  
 


const getdata = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/"
)

    
    setdataa(response.data);
    
}


  return (
    <div>
     <button onClick={getdata}>Get DATA</button>
     <div>
        {
            dataa.map(function jj (ele, idx){
                return <h3>helloo,{idx} , {ele.title}</h3>
            })
        }
     </div>
    </div>
  )
}

export default App