import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img src="./LOGO-mobile.png" alt="logo" />
      <div className='header-route'>
        <Link to="/" className='header-link'>ACCUEIL</Link>
        <Link to="/about" className='header-link'>A PROPOS</Link>
      </div>
    </div>
  )
}

export default Header