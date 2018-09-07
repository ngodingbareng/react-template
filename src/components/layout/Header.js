import React from "react";
import HeaderDefault from "./HeaderDefault";
import HeaderMedia from "./HeaderMedia";

const Header = props => {

  return (
    <div>
      <nav className="navbar">
        <div className="container-nav">
          <div className="nav-default">
            <HeaderDefault />
          </div>
          <div className="nav-media">
            <HeaderMedia />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
