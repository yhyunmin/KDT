// redux 에서 useSelector 가져오기
// store 의 값을 수정하기위해 useDispatch 가져오기
import "./styles/Box.css";
// 분리한 Container 를 불러오기
import {
  Box1Container,
  Box2Container,
  Box3Container,
} from "./containers/BoxesContainers";

function App() {
  return (
    <div className="App">
      Redux Test
      <Box1Container />
    </div>
  );
}

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1: </h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2: </h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Box">
      <h2>Box3: {number} </h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button>CHANGE</button>
    </div>
  );
};

export default App;
