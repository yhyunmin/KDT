import React from "react";

const Counter = () => {
  const [number, setNumber] = React.useState(0);
  const onIncrease = () => {
    console.log("increase");
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${number}입니다.`);
  };
  const consoleMsg = (e, msg) => {};
  return (
    <div>
      <h1>숫자 카운터</h1>
      <h2>{number}</h2>
      {/*  함수형 컴포넌트에서 이벤트*/}
      {/*  1. 인자가 없는 경우 함수 이름만 전달 */}
      <button onClick={onIncrease}>+1 더하기</button>
      {/*  2. 인자가 있는 경우 함수를 익명 화살표 함수로 감싸서 처리 한다.*/}
      <button onClick={() => alertMsg("hello")}>alert</button>
      <button onClick={() => consoleMsg(e, "hello")}> 콘솔 출력</button>
    </div>
  );
};

export default Counter;
