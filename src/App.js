import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import Balance from './components/Balance'

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Hero/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/balance_sheet' element={<Balance/>}/>
      </Routes>
      
      </Router>
      
    </>
    
  )
}

export default App