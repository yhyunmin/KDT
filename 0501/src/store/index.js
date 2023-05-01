// 여러개의 리듀서를 하나로 합치는 일
import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import IsDataReducer from "./isDataReducer";

const rootReducer = combineReducers({
  // 앞에값은 변수처럼 아무렇게나 / 뒤에값은 import 했을때 컴호넌트명
  counter: CounterReducer,
  // CounterReducer, //CounterReducer: CounterReducer
  isData: IsDataReducer,
});

// 다른 파일에서 여러 리듀서를 합친 최종 리듀서(rootReducer)
// 를 사용할 수 있도록 내보냄
export default rootReducer;
