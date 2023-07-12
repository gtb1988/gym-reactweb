import React,{useState} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon]= useState();
  return (
        <>
            <div className='header-s relative'>
                <div className={showMediaIcon ? "navebar mobile-menu" : "navebar" }>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <a href='#' className='menuicon' onClick={() => setShowMediaIcon(!showMediaIcon)} > Click </a>
            </div>
        </>
  )
}

export default Navbar