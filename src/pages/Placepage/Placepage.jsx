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
import Card from "../../components/Card/Card";

function Placepage() {
  const ListofCards = [
      { id: 5, name: "Desert King", img: Frame5 },
      { id: 6, name: "Desert King", img: Frame6 },
      { id: 7, name: "Desert King", img: Frame7 },
      { id: 8, name: "Desert King", img: Frame8 },
      { id: 1, name: "Desert King", img: Frame1 },
      { id: 2, name: "Desert King", img: Frame2 },
      { id: 3, name: "Desert King", img: Frame3 },
      { id: 4, name: "Desert King", img: Frame4 },
  ];
  return (
    <div className="place__page">
      <div className="cards">
        {ListofCards.map((item) => (
          <Card key={item.id} name={item.name} image={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Placepage;
