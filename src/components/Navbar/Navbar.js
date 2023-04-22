import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { FoodDataContext } from '../../contex/DataContext';

const Navbar = () => {

  const {cartItem} = useContext(FoodDataContext)

   return (
    <>
      <div className='navbar'>
        <div>
            <h1>Food App</h1>
        </div>
        <div>
            <NavLink to='/' className='navlinks'>Home</NavLink>
            <NavLink to='/menulist'  className='navlinks'>Menu</NavLink>
            <NavLink to='/cart' className='navlinks'>Cart {cartItem.length && <span>({cartItem.length})</span>}</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
