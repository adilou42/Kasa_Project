import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img src="./LOGO-mobile.png" alt="" />
      <div className='header-route'>
        <Link to="/" className='header-link'>Accueil</Link>
        <Link to="/A propos" className='header-link'>A propos</Link>
      </div>
    </div>
  )
}

export default Header