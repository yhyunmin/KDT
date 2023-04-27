import React from "react";
import { Link } from "react-router-dom";

const Header = ({ userInfo }) => {
  return (
    <>
      {/*  header*/}
      <h2>reactRouter 실습</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/student/${userInfo.name}`}>학생</Link>
          </li>
          <li>
            <Link to={`/student/${userInfo.group}`}>코딩온</Link>
          </li>
          <li>
            <Link to={`/student/new?name=${userInfo.name}`}>SearchParams</Link>
          </li>
          <li>
            <Link to={`/photos`}>PHOTO</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
