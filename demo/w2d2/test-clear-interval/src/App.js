import React, { useState, useEffect } from "react";
import Water from "./Water";

const App = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [actionType, setActionType] = useState();


  useEffect(() => {
    const interval = setInterval(() => {
      if (actionType === "increase" && waterLevel < 5) {
        console.log(interval)
        setWaterLevel((prevWaterLevel) => prevWaterLevel + 1);
      }
      if (actionType === "decrease" && waterLevel > 0) {
        setWaterLevel((prevWaterLevel) => prevWaterLevel - 1);
      }
      console.log(interval)
    }, 2000);
    return () => clearInterval(interval);
  }, [actionType, waterLevel]);



  return (
    <div>
            <h1>Water Counter: {waterLevel}</h1>
      <div id="bathtub">

      </div>
      <div id="buttons">
        <button
          onClick={() => {
            setActionType("increase");
          }}
        >
          increaseWaterLevel
        </button>
        <button
          onClick={() => {
            setActionType("decrease");
          }}
        >
          decreaseWaterLevel
        </button>
      </div>
      <Water waterLevel={waterLevel} />
    </div>
  );
};
export default App;