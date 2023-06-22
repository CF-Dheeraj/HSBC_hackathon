import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'>
          <img src='https://i.ibb.co/djmNkFj/hsbc-logo-0.png' alt='hsbc-logo' className='navbar-logo'/>
        </Link>
        <ul className='nav-menu'>
          <li><a href='/'>Products</a></li>  
          <li><a href='/'>Company</a></li>  
          <li><a href='/'>Support</a></li>  
        </ul>
        <div className='nav-signup'>
            <Link to='/sign-up'>
                SignUp 
            </Link>
            
        </div>

    </nav>
  )
}

export default Navbar