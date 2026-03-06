import React from 'react'

const App = () => {

  function inputechange(val){
    console.log(val);   
  }

   function Pagescroll(val){
    if(val>0){
      console.log('seedha');
      
    }else console.log("ulta");
    
    
  }  
 
  function cli(val){
    console.log('clicjjj')
  }

  return (
    <div>
      <button onClick={cli}> Click</button>
    </div>
    // <div onWheel={(el) =>{
    //   Pagescroll(el.deltaY)
    // }}>
    //   <button onClick={()=>{
    //     console.log('bbbb');
        
    //   }}>Click here</button>

    //   <input onChange={(elem)=>{
    //     inputechange(elem.target.value)
    //   }} type="text" placeholder='Enter U' />

    //   <div onMouseMove={(ele) =>{
    //     console.log(ele.movementX);
        
    //   }} className='hehe'>

       

    //   </div>
    //    <div className='page1'> "page1" </div>
    //    <div className='page2'> "page2" </div>
    //    <div className='page3'> "page3" </div>
    //    <div className='page4'> "page4" </div>
    // </div>
  )
}

export default App