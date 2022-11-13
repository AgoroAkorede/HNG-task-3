import React from "react";
import "./Mainpage.scss";
import Image4 from "../../assets/image 4.jpg";
import Image3 from "../../assets/image 3.png";
import Image5 from "../../assets/image 5.png";
import Image6 from "../../assets/image 6.png";
import Image7 from "../../assets/image 7.png";
import Image8 from "../../assets/image 8.png";
import Image9 from "../../assets/image 9.png";

import MBLogo from "../../assets/mblogo.png";
import metamask from "../../assets/metamask.svg";
import OpenSea from "../../assets/opensea.png";
import Frame1 from "../../assets/frame 1.png";
import Frame2 from "../../assets/frame 2.png";
import Frame3 from "../../assets/frame 3.png";
import Frame4 from "../../assets/frame 4.png";
import Frame5 from "../../assets/frame 5.png";
import Frame6 from "../../assets/frame 6.png";
import Frame7 from "../../assets/frame 7.png";
import Frame8 from "../../assets/frame 8.png";
import Card from "../../components/Card/Card";

function Mainpage() {
  const ListofCards = [
    { id: 1, name: "Desert King", img: Frame1 },
    { id: 2, name: "Desert King", img: Frame2 },
    { id: 3, name: "Desert King", img: Frame3 },
    { id: 4, name: "Desert King", img: Frame4 },
    { id: 5, name: "Desert King", img: Frame5 },
    { id: 6, name: "Desert King", img: Frame6 },
    { id: 7, name: "Desert King", img: Frame7 },
    { id: 8, name: "Desert King", img: Frame8 },
  ];
  console.log(ListofCards);
  return (
    <div className="main">
      <div className="first__section">
        <div className="container">
          <div className="header">
            Rent a<span className="header__special">Place</span> away from{" "}
            <span className="header__special">Home</span> in the
            <span className="header__special">Metaverse</span>
          </div>
          <article>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </article>
          <div className="search">
            <input placeholder="search"></input>
            <button className="btn__search">Search</button>
          </div>
        </div>
        <div className="images">
          <img src={Image4} />
          <img src={Image3} />
          <img src={Image5} />
          <img src={Image6} />
        </div>
      </div>
      <div className="section__break">
        <div className="item">
          <img src={MBLogo} />
          MBToken
        </div>
        <div className="item">
          <img src={metamask} />
        </div>
        <div className="item">
          <img src={OpenSea} />
          OpenSea
        </div>
      </div>
      <div className="second__section">
        <h1>Inspiration for your next adventure</h1>
        <div className="cards">
          {ListofCards.map((item) => (
            <Card key={item.id} name={item.name} image={item.img} />
          ))}
        </div>
      </div>
      <div className="third__section">
        <div className="content">
          <h1 className="header">Metabnb NFTs</h1>
          <article>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </article>
          <button>Learn more</button>
        </div>
        <div className="images">
          <img src={Image7} />
          <img src={Image8} />
          <img src={Image9} />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
