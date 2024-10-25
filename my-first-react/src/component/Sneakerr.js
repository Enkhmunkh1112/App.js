import React from "react";

const Sneakerr = ({ image, garchig, desc }) => {
  return (
      <div className="brih">
        <img className="brh" src={image} alt="" />

        <div className="brth">
          <h3>{garchig}</h3>
          <h4>{desc}</h4>
        </div>
      </div>
  );
};

export default Sneakerr;
