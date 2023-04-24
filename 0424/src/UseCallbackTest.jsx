import React, { useCallback, useState } from "react";

const UseCallbackTest = () => {
  const [text, setText] = useState("");

  // useCallback()
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback 으로 감싸주면
  // 함수를 메모이제이션(기억)해서 컴포넌트가 다시 렌더링되도
  // 기억하고 있는 기존 함수를 그대로 사용
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h1>useCallback hook</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <h2>작성한값 : {text || "없음"}</h2>
    </>
  );
};

export default UseCallbackTest;
