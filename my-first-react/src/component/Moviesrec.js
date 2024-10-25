import React from "react";
import Movies from "./movies";
import Aven from "../image/avengers (1).jpg";
import iron from "../image/ironman (1).jpg";
import spi from "../image/spider-man (1).jpg";
import thor from "../image/thor_love_and_thunder_dc (1).jpg";
const Moviesrec = () => {
  const dana = [
    {
      images: Aven,
      name: "The Avengers",
      descs: "Superheroes team up to save the world.",
    },
    {
      images: iron,
      name: "Iron man 3",
      descs:
        "Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man",
    },
    {
      images: spi,
      name: "Spider-Man: Into the Spider-Verse",
      descs: "An animated adventure with multiple Spider-People.",
    },
    {
      images: thor,
      name: "Thor: Love and Thunder",
      descs:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    },
  ];
  return (
    <div>
      <h1>Recommended movies:</h1>
      <h5>Action,fighting movies</h5>
      <div className="idkp1">
        {dana.map((a) => (
          <Movies images={a.images} name={a.name} descs={a.descs} />
        ))}
      </div>
    </div>
  );
};

export default Moviesrec;
