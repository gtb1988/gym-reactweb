import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.svg'
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
  return (
    <>
          <div className='header blackbg'>
            <div className='topcontact relative'>
                <div className='container'>123.456.7890</div>
            </div>
            <div className='container'>
            <div className='header-s relative'>
                <div className='logo'><NavLink to='/'><img src={Logo} /></NavLink></div>
                <Navbar/>
                <div className='button-s'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Header