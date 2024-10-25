import React from "react";
import Counterer from "./Moviecounter";
import Movierate from "./movierate";
const movies = ({ images, name, descs }) => {
  return (
    <div>
      <div className="idkp">
        <img id="idk" src={images} alt="" />
        <h2 id="idk1">{name}</h2>
        <h5 id="idk2">{descs}</h5>
        <div><Movierate/></div>
      </div>
      <Counterer />
    </div>
  );
};

export default movies;
