import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.svg"
import LogoName from "../../assets/LogoName.svg"
import "./Header.scss"

function Header() {
  return (
    <div className='header'>
        <div className='logo__container'>
            <img src={Logo} className="logo" />
            <img src={LogoName} className="logo__name" />
        </div>

        <ul className='nav'>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/place"> Place to stay</Link></li>
            <li>NFTs</li>
            <li>Community</li>
        </ul>

        <button className='btn__connect'>
            Connect Wallet
        </button>
    </div>
  )
}

export default Header