import React, { useState } from "react";

const SearchComp = ({ props }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [find, setFind] = useState("작성자");

  const search = () => {
    console.log(props);
    setShow(true);
    // setFind 테이블에서 setText의 값을 props list에서 찾기
    const result = props.filter((item) => {
      return item[find].includes(text);
    });
    setSearchList(result);
  };
  const reset = () => {
    setShow(false);
  };
  return (
    <>
      <select name="search" id="" value={find} onChange={setFind}>
        <option value="author">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="작성자"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={search}>검색</button>
      <button onClick={reset}>리셋</button>
      {show && (
        <>
          {searchList?.map((item, index) => {
            return (
              <table>
                <tbody key="">
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </>
      )}
    </>
  );
};

export default SearchComp;
