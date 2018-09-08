import React from "react";
import Menu from "./Menu";
import Brand from "./Brand";

const Header = () => {

  return (
    <div>
      <div className="tutup">
        <Brand branding="React Template"  />
      </div>
      <nav className="navbar">
        <div className="container-nav">
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
