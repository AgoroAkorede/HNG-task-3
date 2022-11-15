import React from "react";
import metamask from "../../imgs/metamask.png";
import walletconnect from "../../imgs/walletconnect.png";
import { FaAngleRight, FaTimes } from "react-icons/fa";
import "./Modal.scss"

function Modal({ setOpen }) {
  return (
    <div className="connect-wallet">
      <div className="header">
        <h3>Connect Wallet</h3>
        <FaTimes onClick={() => setOpen(false)} />
      </div>
      <ul>
        <p>Choose your preferred wallet</p>
        <li>
          <div className="title">
            <img src={metamask} alt="metamask" width="30px" />
            <h4>Metamask</h4>
          </div>
          <FaAngleRight />
        </li>

        <li>
          <div className="title">
            <img src={walletconnect} alt="metamask" width="30px" />
            <h4>WalletConnect</h4>
          </div>
          <FaAngleRight />
        </li>
      </ul>
    </div>
  );
}

export default Modal;
