import React from "react";

const App3 = () => {
  const [text, setText] = React.useState("검정색 글씨");
  const [color, setColor] = React.useState("black");
  const test = (color) => {
    setColor(color === "red" ? "red" : "blue");
    setText(color === "red" ? "빨간색 글씨" : "파란색 글씨");
  };

  return (
    <>
      <h2 style={{ color: color }}>{text}</h2>
      <button
        onClick={() => {
          test("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          test("blue");
        }}
      >
        파란색
      </button>
    </>
  );
};

export default App3;
