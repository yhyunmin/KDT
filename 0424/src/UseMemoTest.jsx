import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  // 숫자목록
  console.log("평균값 계산중 ");
  return numbers.reduce((a, b) => a + b, 0) / numbers.length ?? 0;
};
const UseMemoTest = () => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    console.log("insert");
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  };
  // [after] useMemo Hook
  // 렌더링 과정에서 list 값이 변경될 때만 callback 함수를 실행
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <>
      <h1>useMemo hook</h1>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>

      <div>평균값 : {avg}</div>
      {/* useMemo를 사용안할 시 , input 값의 value 가 바뀔 떄마다 새로 렌더링 됨 */}
      {/*<div>평균값 : {getAverage(list)}</div>*/}
    </>
  );
};

// useMemo()요약
// 수행한 연산의 결과 값을 기억 함으로써 계산을 최소화함.
export default UseMemoTest;
