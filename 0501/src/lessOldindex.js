import React from "react";
import ReactDOM from "react-dom/client";

// 최상단 oldIndex.js 에서 redux 적용시 불러와야할 컴포넌트들
import { configureStore } from "@reduxjs/toolkit";
// react redux store 를 제공해주는 컴포넌트
import { Provider } from "react-redux";
// Redux Devtools 크롬 익스텐션과 연동하기
import { composeWithDevTools } from "redux-devtools-extension";

// reducer 를 가지고옴
import rootReducer from "./store/index.js";
import App3 from "./App3";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 최상단 태그에 Provider 를 사용 store 변수를 props 로 넘겨준다. ( 반드시 가져야함 )
  // Provider 하위 컴포넌트들은 store에 저장된 state들을 가져다 사용 가능.
  <Provider store={store}>
    <App3 />
  </Provider>
);
