import React, { useState } from "react";

const App4 = () => {
  const [display, setDisplay] = useState("block");
  return (
    <>
      <h2 style={{ display: display }}>안녕하세요</h2>
      <button
        onClick={() => {
          setDisplay("none");
        }}
      >
        사라져라
      </button>
    </>
  );
};
export default App4;
