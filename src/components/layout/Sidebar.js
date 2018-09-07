import React from "react";
import MenuSidebar from "./MenuSidebar";
import PropTypes from "prop-types";
import Logo from "../../assets/images/logo.png";

const Sidebar = props => {
  const { branding } = props;

  return (
    <div>
      <nav className="sidebar">
        <a href="/" className="sidebar-brand">
          <img src={Logo} alt={branding} />
          <div>{branding}</div>
        </a>
        <div className="container-sidebar">
          <MenuSidebar />
        </div>
      </nav>
    </div>
  );
};

Sidebar.defaultProps = {
  branding: "My App"
};

Sidebar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Sidebar;
