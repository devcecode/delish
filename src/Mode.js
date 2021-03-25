import React, { useState, useEffect } from "react";
import "./mode.css";

import Delivery from "./Delivery";
import Map from "./Map";

const Mode = () => {
  const [myState, setMyState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMyState(true);
    }, 500);
  }, []);
  return (
    <div
      className="mode"
      style={myState !== true ? { display: "none" } : { display: "block" }}
    >
      <div className="mode__container">
        <Delivery />
        <Map />
      </div>
    </div>
  );
};

export default Mode;
