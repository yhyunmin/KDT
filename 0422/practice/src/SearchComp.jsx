import React, { useState } from "react";

const SearchComp = ({ props }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [find, setFind] = useState("작성자");

  // const searchComment = () => {
  //   // TODO: comment 배열 특정 조건에 맞는 것으로 filter
  //   const searchResult = comment.filter((cmt) => {
  //     // console.log(cmt); // comment 배열 state에 대한 각 원소(객체)
  //     // console.log(cmt[searchType]); // [작성자] 선택 => 민수, 지민, 희수 // [제목] 안뇽, 하이하이, 멋쟁이
  //     // console.log(cmt[searchType].includes(inputSearch));
  //     // false; 검색 결과가 없음 -> null
  //     // true; 검색 결과가 있음 -> 검색 결과 (배열) 반환
  //
  //     if (!cmt[searchType].includes(inputSearch)) {
  //       // !false
  //       return null;
  //     }
  //
  //     return cmt;
  //   });
  //   console.log("검색 결과 >> ", searchResult);
  //
  //   // TODO: 검색 결과 state 설정
  //   setResult(searchResult);
  //   setInputSearch("");
  // };
  //
  // const selectSearchType = (e) => {
  //   // console.log('select 태그의 옵션이 변경되었음!');
  //   // console.log('선택한 option 태그의 value >> ', e.target.value);
  //   // select option 상태 설정
  //   setSearchType(e.target.value);
  // };
  const search = () => {
    console.log(props);
    setShow(true);
    // setFind 테이블에서 setText의 값을 props list 에서 찾기
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
      <select
        name="search"
        value={find}
        onChange={(e) => {
          setFind(e.target.value);
        }}
      >
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
