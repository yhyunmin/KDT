import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ClassComponent from "./Class-component";
import FunctionComponent from "./Function-component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <ClassComponent name="홍길동" age={13} />
    <ClassComponent name="성춘향" age={23} />
    <FunctionComponent name="둘리" age={43} />
  </>
);
