import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/images/logo.png";

const Brand = (props) => {
  const { branding } = props;

  return (
      <a href="/" className="sidebar-brand">
        <img src={Logo} alt={branding} />
        <div>{branding}</div>
      </a>
  );
}

Brand.defaultProps = {
  branding: "My App"
};

Brand.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Brand;
