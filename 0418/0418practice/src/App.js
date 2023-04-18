import React from "react";
import "./App.css";
import Food from "./Food";
import Book from "./Book";
import ClassComponent from "./Class-component";

const App = () => {
  const [name, animal] = ["레오", "dog"];
  const a = 12;
  const b = 10;
  const title = "Hello World";
  const food = "치킨";
  const bookObj = {
    title: "나의 하루는 4시 40분에 시작된다",
    author: "김유진",
    price: "13,500원",
    type: "자기계발서",
  };
  const ccObj = {
    text: "App 컴포넌트에서 넘겨준 text props 입니다.",
    valid: "콘솔 띄우기 성공 !",
  };
  return (
    <>
      이것은 div 입니다
      <h3>이것은 div 안에 있는 h3태그입니다.</h3>
      <h2>
        제 반려 동물의 이름은
        <u>{name}</u>
        입니다.
      </h2>
      <h2>
        <u>{name}</u>은 <u>{animal}</u>
        입니다.
      </h2>
      {/* eslint-disable-next-line no-constant-condition */}
      <p> {3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</p>
      <p>{a > b && "a가 b보다 큽니다"}</p>
      <div className="test">
        <h1>{title}</h1>
        <div>
          <label htmlFor="id">
            아이디 :
            <input className="input" type="text" id="id" />
          </label>
          <br />
          <label htmlFor="pw">
            비밀번호 :
            <input className="input" type="password" id="pw" />
          </label>
        </div>
      </div>
      <article>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </article>
      <Food food={food} />
      <Book
        title={bookObj.title}
        author={bookObj.author}
        price={bookObj.price}
        type={bookObj.type}
      />
      <ClassComponent text={ccObj.text} valid={ccObj.valid} />
    </>
  );
};

export default App;
