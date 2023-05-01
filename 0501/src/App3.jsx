// redux 에서 useSelector 가져오기
// store 의 값을 수정하기위해 useDispatch 가져오기
import { useDispatch, useSelector } from "react-redux";
import "./styles/Box.css";

function App() {
  // store 에서 값을 가져올땐 useSelector 를 사용함.
  // : redux store 의 state 를 조회하는 훅
  // : 인자로 콜백함수
  // :: 콜배갛ㅁ수의 매개변수로 state를 받을 수 있음
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      Redux Test
      <Box1 number={number} />
    </div>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="Box">
      <h2>Box1:{number} </h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2: </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box3:{number} </h2>
      <h2>isDATA ? : {isData ? "true" : "false"}</h2>
      {/*  state의 값을 수정을 원할때는 dispatch 로 요청헤야함.*/}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHANGE</button>
    </div>
  );
};

export default App;
