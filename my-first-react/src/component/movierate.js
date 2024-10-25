import React, { useState } from "react";

const Movierate = () => {
  const [star1, setStar1] = useState("empty");
  const [star2, setStar2] = useState("empty");
  const [star3, setStar3] = useState("empty");
  const [star4, setStar4] = useState("empty");
  const [star5, setStar5] = useState("empty");
  return (
    <div>
      <button
        className={star1 === "empty" ? "ful" : "mt"}
        onClick={() => (setStar1 (star1 === "empty" ? "star" : "empty")) }>
        {star1}
      </button>

      <button
        className={star2 === "empty" ? "ful" : "mt"}
        onClick={() => (setStar2 (star2 === "empty" ? "star" &&setStar1("star") : "empty")) }>
        {star2}
      </button>

      <button
        className={star3 === "empty" ? "ful" : "mt"}
        onClick={() => (setStar3(star3 === "empty" ? "star"
          && setStar2("star") &&
          setStar1("star"): "empty"))}>
        {star3}
      </button>

      <button
        className={star4 === "empty" ? "ful" : "mt"}
        onClick={() => (setStar4(star4 === "empty" ? "star"
          && setStar3("star")
          && setStar2("star")
          && setStar1("star"): "empty"))}>
        {star4}
      </button>

      <button
        className={star5 === "empty" ? "ful" : "mt"}
        onClick={() => (setStar5(star5 === "empty" ? "star" &&
          setStar4("star") &&
          setStar3("star") &&
          setStar2("star") : "empty"))}>
        {star5}
      </button>
    </div>
  );
};

export default Movierate;
