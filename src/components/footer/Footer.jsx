import React from "react";
import FooterLogo from "../../assets/LogoFooter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="head">
        <img src={FooterLogo} />
        <div className="socials">
          <img src={Facebook} />
          <img src={Instagram} />
          <img src={Twitter} />
        </div>
        <p> 2022 Metabnb</p>
      </div>
      <div className="content">
        <ul>
          <h1>Community</h1>
          <li>NFTs</li>
          <li>Token</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
        <ul>
          <h1>Places</h1>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
        <ul>
          <h1>About us</h1>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
