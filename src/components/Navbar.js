import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
          <div className='small-nav-container'>
              <ul className='small-nav-menu'>
                <li><a href='/'>Personal</a></li>
                <li><a href='/'>Retail Banking</a></li>
                <li><a href='/'>Business Banking</a></li>
                <li><a href='/'>Asset Management</a></li>  
              </ul>
              <div className='nav-right'>
                <div className='nav-login'>
                <Link to='/sign-up'>
                      Login 
                  </Link>
                </div>
                  
                  
              </div>

              </div>
              <div className='big-nav'>
                  <Link to='/'>
                    <img src='https://i.ibb.co/djmNkFj/hsbc-logo-0.png' alt='hsbc-logo' className='navbar-logo'/>
                  </Link>
                  
                  
                  <ul className='nav-menu'>
                    <li><a href='/'>Banking</a></li>  
                    <li><a href='/'>Borrowing</a></li>  
                    <li><a href='/'>Investing</a></li>  
                    <li><a href='/'>NRI</a></li>  
                    <li><a href='/'>Offers</a></li>  
                    <li id='special-nav'><a href='/'>Online Banking</a></li>  
                  </ul>
                </div>
                

        </nav>
    </>
  )
}

export default Navbar