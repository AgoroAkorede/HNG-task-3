import React from "react";
import "./Placepage.scss";
import Frame1 from "../../assets/frame 1.png";
import Frame2 from "../../assets/frame 2.png";
import Frame3 from "../../assets/frame 3.png";
import Frame4 from "../../assets/frame 4.png";
import Frame5 from "../../assets/frame 5.png";
import Frame6 from "../../assets/frame 6.png";
import Frame7 from "../../assets/frame 7.png";
import Frame8 from "../../assets/frame 8.png";
import Frame9 from "../../assets/frame 9.png";
import Frame10 from "../../assets/frame 10.png";
import Frame11 from "../../assets/frame 11.png";
import Frame12 from "../../assets/frame 12.png";
import Frame13 from "../../assets/frame 13.png";
import Frame14 from "../../assets/frame 14.png";
import Frame15 from "../../assets/frame 15.png";
import Frame16 from "../../assets/frame 16.png";
import Settings from "../../assets/setting.svg";
import Card from "../../components/Card/Card";

function Placepage() {
  const ListofCards = [
    { id: 1, name: "Desert King", img: Frame5 },
    { id: 2, name: "Desert King", img: Frame6 },
    { id: 3, name: "Desert King", img: Frame7 },
    { id: 4, name: "Desert King", img: Frame8 },
    { id: 5, name: "Desert King", img: Frame1 },
    { id: 6, name: "Desert King", img: Frame2 },
    { id: 7, name: "Desert King", img: Frame3 },
    { id: 8, name: "Desert King", img: Frame4 },
    { id: 9, name: "Desert King", img: Frame9 },
    { id: 10, name: "Desert King", img: Frame10 },
    { id: 11, name: "Desert King", img: Frame11 },
    { id: 12, name: "Desert King", img: Frame12 },
    { id: 13, name: "Desert King", img: Frame13 },
    { id: 14, name: "Desert King", img: Frame14 },
    { id: 15, name: "Desert King", img: Frame15 },
    { id: 16, name: "Desert King", img: Frame16 },
  ];
  return (
    <div className="place__page">
    <ul className="list">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        <button>Location <img src={Settings} /></button>
    </ul>
      <div className="cards">
        {ListofCards.map((item) => (
          <Card key={item.id} name={item.name} image={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Placepage;
