import React, { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(5);
  const [visible, setVisible] = useState(true);
  const changeVisible = () => {
    setVisible(!visible);
    console.log("changeVisible");
  };
  return (
    <>
      <h1>LifeCycleFunc</h1>
      <button>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
