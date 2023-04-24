import React, { useReducer } from "react";

const UseReducerTest = () => {
  const reducer = (prevNumber, action) => {
    // prevNumber : 현개 state
    // action:dispatch애서 인자로 받고있는 현재 액션 값
    switch (action) {
      case "Increment":
        return prevNumber + 1;
      case "Decrement":
        return prevNumber - 1;
      case "RESET":
        return 7;
      default:
        return prevNumber;
    }
  };
  const [number, dispatch] = useReducer(reducer, 7);
  // reducer 라는 이름의 함수 가 첫번째 파라미터

  const increment = () => {
    dispatch("Increment");
  };
  const decrement = () => {
    dispatch("Decrement");
  };
  const reset = () => {
    dispatch("RESET");
  };

  return (
    <>
      <h1>useReducer Hook</h1>
      <h2>{number}</h2>
      <button onClick={increment}>Increase +1</button>
      <button onClick={decrement}>Decrease -1</button>
      <button onClick={reset}>Reset to 7</button>
    </>
  );
};
export default UseReducerTest;
