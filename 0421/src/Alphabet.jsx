import React, { useState } from "react";

const Alphabet = () => {
  // const [alphabet, setAlphabet] = useState(["a", "p", "p", "l", "e"]);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: "a",
    },
    {
      id: 2,
      alpha: "p",
    },
    {
      id: 3,
      alpha: "p",
    },
    {
      id: 4,
      alpha: "l",
    },
    {
      id: 5,
      alpha: "e",
    },
  ]);
  // inputAlpha state : input 에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");

  const enterAddAlpha = (e) => {
    if (e.key === "Enter") addAlpha();
  };

  const addAlpha = () => {
    if (inputAlpha === "") {
      return;
    }
    const newAlphabet = alphabet.concat({
      id: alphabet[alphabet.length - 1].id + 1,
      alpha: inputAlpha,
    });
    console.log(newAlphabet);
    setAlphabet(newAlphabet);
    setInputAlpha("");
  };

  const deleteAlpha = (id) => {
    //filter()
    // 콜백함수의 테스트를 통과하는 모든 요소를 모아서 "새로운 배열" 반환
    // true 는 요소를 유지, false 요소 버림
    // => alphabet state 에서 매개변수로 받아오는 id와
    // 배열 각 원소의 id 값이 같은 경우 빼고 나머지를 모두 새로운 배열에 저장
    const newAlpha = alphabet.filter((obj) => obj.id !== id);
    setAlphabet(newAlpha);
  };
  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyPress={enterAddAlpha}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {/*<li>a</li>*/}
        {/*{alphabet.map((v, i) => (*/}
        {/*  <li key={i}>{v}</li>*/}
        {/*))}*/}
        {alphabet.map((v) => {
          return (
            <li key={v.id} onDoubleClick={() => deleteAlpha(v.id)}>
              {v.alpha}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Alphabet;
