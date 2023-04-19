import React, { useState } from "react";

const App2 = () => {
  const [number, setNumber] = useState(0);

  const Increase = (number) => {
    setNumber(number + 1);
  };
  const Decrease = (number) => {
    setNumber(number - 1);
  };
  return (
    <>
      <p>{number}</p>
      <button onClick={() => Increase(number)}>Increase</button>
      <button onClick={() => Decrease(number)}>Decrease</button>
    </>
  );
};

export default App2;
