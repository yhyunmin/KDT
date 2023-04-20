import React, { useState } from "react";

const App2 = () => {
  const [number, setNumber] = useState(0);

  const whatever = (number, symbol, howmuch) => {
    const newNumber = symbol === "+" ? number + howmuch : number - howmuch;
    setNumber(newNumber);
  };
  return (
    <>
      <p>{number}</p>
      <button onClick={() => whatever(number, "+", 1)}>Increase</button>
      <button onClick={() => whatever(number, "-", 1)}>Decrease</button>
    </>
  );
};
export default App2;
