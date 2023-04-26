import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <span>Router Tutorial</span>
      <div>
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/products">
          Product
        </Link>
      </div>
    </header>
  );
};

export default Header;
