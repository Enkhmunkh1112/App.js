import React, { useState } from "react";
const Moviecounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="cc">
      <button id="up" onClick={() => setCount(count + 1)}>
        up vote
      </button>
      <button id="down" onClick={() => setCount(count - 1)}>
      down vote
      </button>
      <button id="reset" onClick={()=>setCount(count-count)}>
      reset votes
      </button>
      <p id="op">{count}</p>
    </div>
  );
};

export default Moviecounter;
