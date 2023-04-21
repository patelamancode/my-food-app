import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
   return (
    <>
      <div className='navbar'>
        <div>
            <h1>Food App</h1>
        </div>
        <div>
            <NavLink to='/' className='navlinks'>Home</NavLink>
            <NavLink to='/menulist'  className='navlinks'>Menu</NavLink>
            <NavLink to='/cart' className='navlinks'>Cart<span>(length)</span></NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
