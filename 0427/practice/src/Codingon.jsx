import React from "react";
import { useParams } from "react-router-dom";

const Codingon = (props) => {
  console.log(props);
  console.log(useParams());
  const { codingon } = useParams();

  return (
    <div>
      <h1>Codingon페이지</h1>
      <p>학생의 이름은 {codingon}입니다.</p>
    </div>
  );
};

export default Codingon;
