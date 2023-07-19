import React,{useState} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon]= useState(false);
  return (
        <>
            <div className='menu-s relative'>
            <div  className={showMediaIcon ? "menus mobile-menu" : "menus" }>
                <div className="navebar">
                <a href='#' className='menuicon' onClick={() => setShowMediaIcon(!showMediaIcon)} ></a>
                    <ul onClick={() => setShowMediaIcon(!showMediaIcon)}>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                 

                </div>
                
                <a href='#' className='menuicon' onClick={() => setShowMediaIcon(!showMediaIcon)} > <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17H20M4 12H20M4 7H20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> </a>

<div className='popup-bg' onClick={() => setShowMediaIcon(!showMediaIcon)}></div>
                </div>
                            </div>
                           
        </>
  )
}

export default Navbar