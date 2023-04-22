import React, { useRef, useState } from "react";
import SearchComp from "./SearchComp";
import TableComp from "./TableComp";

function App() {
  const userList = [
    {
      id: 1,
      author: "author",
      title: "title",
    },
  ];
  const [list, setList] = useState(userList);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const authorFocus = useRef();
  const titleFocus = useRef();

  const checkInputFocus = () => {
    if (author === "") {
      authorFocus.current.focus();
      return false;
    } else if (title === "") {
      titleFocus.current.focus();
      return false;
    }
    return true;
  };
  const addList = () => {
    // let focusRef;
    // if (author === "") {
    //   focusRef = authorFocus;
    // } else if (title === "") {
    //   focusRef = titleFocus;
    // }
    //
    // if (focusRef) {
    //   focusRef.current.focus();
    //   return;
    // }
    if (!checkInputFocus()) return;
    if (checkInputFocus()) {
      setList([
        ...list,
        {
          id: list.length + 1,
          author,
          title,
        },
      ]);
      setAuthor("");
      setTitle("");
    }
  };
  return (
    <>
      <div>
        <fieldset>
          <label htmlFor="author">작성자</label>
          <input
            type="text"
            id="author"
            placeholder="작성자"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            ref={authorFocus}
          />
          <label htmlFor="">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            ref={titleFocus}
          />
          <button onClick={addList}>작성</button>
        </fieldset>
      </div>
      <SearchComp userList={list} />
      <TableComp userList={list} />
    </>
  );
}

export default App;
