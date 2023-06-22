import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {

  const userdata = [
    {
      custId:'12345',
      pass:'12345'
    },
    {
      custId:'admin',
      pass:'admin'
    },

  ]

  const [inputdata,setInputData] = useState({custId:'',psw:''})

  const handleSubmit =(e)=>{
    e.preventDefault();
    let auth= true; // write a function here
    if(auth)
    {
      window.location.href = '/dashboard'
    }
    else{
      let warning = document.getElementById('not-found');
      warning.classList.add('not-found-toggle');
    }
    setInputData({custId:'',psw:''});
    
  }
  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <h2>Login Form</h2>

        <form onSubmit={handleSubmit}>
            <div className="imgcontainer">
              <img src="./images/avatar.jpg" alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
              <label htmlFor="custId"><b>CustomerId</b></label>
              <input type="text" placeholder="Enter Customer Id" name="custId" value={inputdata.custId} onChange={(e)=>{setInputData({custId:e.target.value})}} required/>

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" value={inputdata.psw} onChange={(e)=>{setInputData({...inputdata,psw:e.target.value})}} required/>
              <span id='not-found'>Probably entering wrong Id or Password</span>
                  
              <button type="submit">Login</button>
              
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default SignUp