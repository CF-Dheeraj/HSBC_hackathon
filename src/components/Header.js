import React from 'react'
import './Header.css'

const Header= () => {
  return (
    <div className='navbar'>
        <a href='#'><h2 className='nav-logo'>HSBC</h2></a>
        <ul className='nav-container'>
            <li className='nav-item'>
                <a href='/' className='nav-links'>
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a href='/' className='nav-links'>
                    Services
                </a>
            </li>
            <li className='nav-item'>
                <a href='/' className='nav-links'>
                    Signup
                </a>
            </li>
        </ul>

    </div>
  )
}

export default Header;
