import React, { useState } from "react";

const App4 = () => {
  // const [display, setDisplay] = useState("block");
  const [show, setShow] = useState(true);
  const [text, setText] = useState("사라져라");

  const [visible, setVisible] = useState(true);
  function toggle() {
    setVisible(!visible);
    setText(!visible ? "사라져라" : "보여져라");
  }

  // function toggleBtn() {
  //   // eslint-disable-next-line no-unused-expressions
  //   show === true
  //     ? (setShow(false), setText("보여져라"))
  //     : (setShow(true), setText("사라져라"));
  // }

  return (
    <>
      <button onClick={toggle}>{text}</button>
      {visible && (
        <>
          <h2>안녕하세요</h2>
        </>
      )}
    </>
  );
};
export default App4;
