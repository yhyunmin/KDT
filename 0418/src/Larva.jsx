import React from "react";
import "./larva.css";

const Larva = () => {
  const style = {
    backgroundColor: "black",
  };
  return (
    <>
      <div className="larva" style={style}>
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
        <div className="body body6"></div>
      </div>
    </>
  );
};

export default Larva;
