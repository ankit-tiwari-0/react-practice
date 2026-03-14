import React,{useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

const Log = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {setUser} = useContext( UserContext)

  const handlesubmit = (e) =>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" 
      value={username} onChange={(e) =>setusername(e.target.value)}
      placeholder='Username' />
      <input type="text"
      value={password} onChange={(e) => setpassword(e.target.value)} 
       placeholder='password' />
      <button onClick={handlesubmit}>Submit</button>

    </div>
  )
}

export default Log 