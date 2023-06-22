import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'


const SignUp = ({handleAuth}) => {

  const url = 'https://dp-beardboys.onrender.com';
  let flag= false;

  const[userData,setUserData] = useState([]);
  const [inputdata,setInputData] = useState({userId:'',password:''})
  const handleSubmit= ((e)=>{
    // POST request using fetch inside useEffect React hook
    e.preventDefault();
    console.log(inputdata)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputdata)
    };
    fetch('http://10.230.7.54:8082/users/Login', requestOptions)
        .then(response => response.json())
        .then(data => console.log("This is confirmation"+data));

    
    
      
   
// empty dependency array means this effect will only run once (like componentDidMount in classes)
})

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
              <input type="text" placeholder="Enter Customer Id" name="custId" value={inputdata.userId} onChange={(e)=>{setInputData({userId:e.target.value})}} required/>

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" value={inputdata.password} onChange={(e)=>{setInputData({...inputdata,password:e.target.value})}} required/>
              <span id='not-found'>Probably entering wrong Id or Password</span>
                  
              <button type="submit" >Login</button>
              
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default SignUp