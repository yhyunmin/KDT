import React, { useEffect, useState } from "react";

const LifeCycleFuncChild = (props) => {
  const { number } = props;
  const [text, setText] = useState();

  useEffect(() => {}, []);
  useEffect(() => {}, []);

  // text 변동시 useEffect 변화
  useEffect(() => {
    console.log("updated");
  }, [text]);

  return (
    <>
      <h1>LifeCycleFuncChild</h1>
      <b>{number}</b>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
