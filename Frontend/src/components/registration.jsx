import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [registration, setRegistration] = useState({
    username:"",
    password:""
  })
  const handleregister = (e) =>{
    const{name, value} = e.target
    setRegistration((prev)=>({...prev,
      [name]:value}))
  }
  const handleResgiter = async(e) =>{
    e.preventDefault()

    try{
      const response = await axios.post("http://localhost:8001/register",registration)
      console.log(response.data);
    }
    catch(error){
     console.log("registration failed");
    }   
  setRegistration({
    username:"",
    password:""
  })
  }
  return (
    <div>
      <form onSubmit={handleResgiter}>
        <input type='text'
        placeholder='username'
        name='username'
        value={registration.username}
        onChange={handleregister}
        />
        <input type='password'
        placeholder='password'
        name='password'
        value={registration.password}
        onChange={handleregister}

        />
        <button type='submit'>Resgiter</button>
        <p>
          Already a user ?
            <Link to="/login">login here</Link>
          
        </p>
      </form>
    </div>
  )
}

export default Registration