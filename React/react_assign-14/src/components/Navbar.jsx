import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <div className='nav-img-container'>
        <img src='/edstem.jpg' alt=''/>
        </div>
        <div className='nav-container'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact-us'>Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        </div>
    </nav>
  )
}
