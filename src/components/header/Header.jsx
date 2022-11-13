import React from 'react'
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
            <li>Home</li>
            <li>Place to stay</li>
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