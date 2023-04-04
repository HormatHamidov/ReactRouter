import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/aboutus" >AboutUs</NavLink>
        <NavLink to="/history" >History</NavLink>
    </nav>
  )
}

export default Navbar