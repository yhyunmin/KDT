import React from "react";

const AuthTitleInputComp = () => {
  return (
    <div>
      <legend>
        <label htmlFor="author">작성자</label>
        <input type="text" id="author" placeholder="작성자" />
        <label htmlFor="">제목</label>
        <input type="text" id="title" />
        <button>작성</button>
      </legend>
    </div>
  );
};

export default AuthTitleInputComp;
