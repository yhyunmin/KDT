import React from "react";
import { useParams } from "react-router-dom";

const SearchParams = () => {
  console.log(useParams());
  return (
    <div>
      <h1>SearchParams 사이트</h1>
      {/*<p>학생의 이름은 {name}</p>*/}
    </div>
  );
};

export default SearchParams;
