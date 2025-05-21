import React from "react";
import Left2 from "./Left2";

const Left1 = (props) => {
  return (
    <div>
      <h2>Left1 :{props.number}</h2>
      <Left2 />
    </div>
  );
};

export default Left1;
