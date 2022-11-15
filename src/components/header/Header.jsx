import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import LogoName from "../../assets/LogoName.svg";
import Nav from "../../assets/nav.svg";
import Modal from "../../components/Modal/Modal";
import "./Header.scss";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const [modal, setModal] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="header__main">
        <div className="logo__container">
          <img src={Logo} className="logo" />
          <img src={LogoName} className="logo__name" />
        </div>

        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place"> Place to stay</Link>
          </li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <button
          className="btn__connect"
          onClick={() => {
            setOpen(true);
          }}
        >
          Connect Wallet
        </button>
      </div>
      <div className="header__mobile">
        <div className="logo__container">
          <img src={Logo} className="logo" />
          <img src={LogoName} className="logo__name" />
        </div>
        <button className="nav__mobile" onClick={() => setModal(true)}>
          <img src={Nav} />
        </button>
      </div>

      <div className={`connect-wallet--modal ${isOpen ? "active" : ""}`}>
        <Modal setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Header;
