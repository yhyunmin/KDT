import React, { useState } from "react";

const HandlerEx2 = () => {
  const [text, SetText] = useState("hello World");
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => SetText("Goodbye World")}>아디오수</button>
    </div>
  );
};

export default HandlerEx2;
