import React from "react";
import gutakl1 from "../image/nike.png";
import Sneakerr from "./Sneakerr";
import Sneaker1 from "../image/nikes.png";
import Sneaker2 from "../image/jordanss.webp";
const Sneakersss = () => {
  const data = [
    {
      image: gutakl1,
      garchig: "Nike blazer mid 77",
      desc: "Classic sneakers with a vintage look.",
    },
    {
      image: Sneaker1,
      garchig: "Air max 270",
      desc: "Air Max series with a comfortable and stylish design.",
    },
    {
      image: Sneaker2,
      garchig: "Air jordans 1 mid",
      desc: "Modern design with React technology for a comfortable feel.",
    },
  ];
  return (
    <div>
      <div className="container">
        {data.map((d) => (
          <Sneakerr image={d.image} garchig={d.garchig} desc={d.desc} />
        ))}
      </div>
    </div>
  );
};

export default Sneakersss;
