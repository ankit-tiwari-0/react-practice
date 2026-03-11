import React from 'react'

const App = () => {
//     localStorage.setItem('age','20')
//    const hh = localStorage.getItem('user')
//     console.log(hh);
//     localStorage.removeItem('age')

//     localStorage.clear

const user = {
    user:'Ankit',
    Age:21,
    city:'DElhi'
}

localStorage.setItem('USER',JSON.stringify(user))

const neha = JSON.parse (localStorage.getItem('USER',))

console.log(neha);

localStorage.clear

    
  return (
    <div>

    </div>
  )
}

export default App