import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Student = (props) => {
  // console.log(props);
  console.log("?", useParams());
  const { name } = useParams();
  // 경로에서 원하는 쿼리스트링 찾을때 쓰는것
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("name");
  //
  return (
    <div>
      <h1>학생 페이지</h1>
      <p>학생의 이름은 {name}입니다.</p>
      {keyword && (
        <strong>
          실제이름은
          {keyword}
          입니다.
        </strong>
      )}
    </div>
  );
};

export default Student;
