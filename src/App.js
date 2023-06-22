import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Balance from './components/Balance'


const App = () => {

  const[auth,setAuth] = useState(false);
  const handleAuth = (status) =>{
    setAuth(status);
    console.log(status);
  }
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Hero/>}/>
        <Route path='/sign-up' element={<SignUp handleAuth={handleAuth}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
        <Route path='/balance_sheet' element={<Balance/>}/>
      </Routes>
      
      </Router>
      
    </>
    
  )
}

export default App