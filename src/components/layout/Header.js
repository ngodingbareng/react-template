import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/logo.png";
import HeaderDefault from "./HeaderDefault";
import HeaderMedia from "./HeaderMedia";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar">
        <div className="container-nav">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt={branding} />
            <div>{branding}</div>
          </a>
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

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
