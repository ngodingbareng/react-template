import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="dropdown-nav">
          <a className="dropdown-nav-btn">Nama <i className="arrow-down"></i></a>
          <div className="dropdown-nav-content">
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    );
  }
}

export default Menu;
