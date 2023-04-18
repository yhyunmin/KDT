import React from "react";
import img from "./img.png";

const Book = (props) => {
  const { title, author, price, type } = props;
  return (
    <div className="book">
      <div className="heading">이번주 베스트 셀러</div>
      <img src={img} alt="" />
      <div className="title">{title}</div>
      <div className="author">저자 : {author}</div>
      <div className="price">판매가 : {price}</div>
      <div className="type">구분 : {type}</div>
    </div>
  );
};

export default Book;
