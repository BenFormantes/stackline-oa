import React from 'react'
import './NavBar.css'
import logo from '../assets/stackline_logo.svg'
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
