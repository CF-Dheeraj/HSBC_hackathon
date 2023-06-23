import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Balance from './components/Balance'
import Trend from './components/Trend'


const App = () => {

  const[auth,setAuth] = useState(false);
  const handleAuth = (status) =>{
    setAuth(status);
    localStorage.setItem('status',auth)
   
  }
  return (
    <>
      <Router>
        <video src='/videos/bankers.mp4' autoPlay loop muted></video>
        <Navbar auth={auth}/>
        <Routes>
          <Route path='/' exact element={<Hero/>}/>
          <Route path='/sign-up' element={<SignUp handleAuth={handleAuth}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/card_trend' element={<Trend/>}/>
          
          
          <Route path='/balance_sheet' element={<Balance/>}/>
        </Routes>
      
      </Router>
      
    </>
    
  )
}

export default App