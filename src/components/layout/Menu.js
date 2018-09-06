import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown-nav">
          <a className="dropdown-nav-btn">Users</a>
          <div className="dropdown-nav-content">
            <Link to="/users">Data Users</Link>
            <Link to="/user/add">Tambah User</Link>
          </div>
        </li>
      </ul>
    );
  }
}

export default Menu;
