import React, { useState } from "react";
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

  const addList = () => {
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
          />
          <label htmlFor="">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
