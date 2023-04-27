import React from "react";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode")); // get() : 쿼리스트링 key의 value값 확인.
  // / = -> null
  // /?mode=Dark => Dark

  // join() 메소드
  const msg = ["smurf", "님", "안녕하세요"];
  console.log(msg.join("?"));
  const phone = ["010", "1234", "5678"];
  console.log(phone.join("-"));
  return (
    <main className={["MainPage", searchParams.get("mode")].join(" ")}>
      <h1>여기는 홈 !</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: "Dark" });
        }}
      >
        다크모드
      </button>
    </main>
  );
};
export default MainPage;
