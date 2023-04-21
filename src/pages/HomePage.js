import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {

    const styles ={
        cursor:'pointer',
        backgroundColor:'#fc7f19ce',
        color:'white',
        padding:'8px 20px',
        border:'none',
        borderRadius:'8px',
        boxShadow: '2px 2px 2px 2px grey'
    }

  return (
    <div>
      <div>
        <h1>Welcome, to neog-food Ordering App</h1>
      </div>
      <NavLink to='/menulist'><button style={styles}>Menu item</button></NavLink>
    </div>
  )
}

export default HomePage
