import React, { useState } from "react";
const Movierate = () => {
  const [star, setStar] = useState("empty");
  const onClick = () => {
    setStar(star === "empty" ? "star" : "empty");
  };
  return (
    <div>
      <button className={star === "empty" ? "ful" : "mt"} onClick={onClick}>
        {star}
      </button>
    </div>
  );
};

export default Movierate;
