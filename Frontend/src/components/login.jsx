import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

 const Login = () => {
  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })
  const handleloginchange = (e) =>{
   const {name,value} = e.target;
   setLoginData((prev)=>({...prev,
    [name]:value}))
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{
      const response = await axios.post("http://localhost:8001/login",loginData)
      const{success,message} = response.data;

      if(success){
        console.log("success login");
      }
      else{
        console.log(message);
      }
    }
    catch(error){
        console.log(error);
    }
    setLoginData({
      username:'',
      password:""
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'
        name='username'
        placeholder='username'
        value={loginData.username}
        onChange={handleloginchange}
        required
        />
        <input type='password'
        name='password'
        placeholder='password'
        value={loginData.password}
        onChange={handleloginchange}
        required
        />
        <button type='submit'>login</button>
        <p>
          Not registered ?
            <Link to="/registration">register here</Link>
          
        </p>
      </form>
    </div>
  )
}

export default Login