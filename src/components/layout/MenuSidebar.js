import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuSidebar extends Component {
  render() {
    return (
      <ul className="sidebar-nav">
        <li className="sidebar-title">
          <div>MAIN MENU</div>
        </li>
        <div className="sidebar-menu-scroll">
          <li className="sidebar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown-sidebar-nav">
            <a className="dropdown-sidebar-nav-btn">Users</a>
            <div className="dropdown-sidebar-nav-content">
              <Link to="/users">Data Users</Link>
              <Link to="/user/add">Tambah User</Link>
            </div>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 1</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 2</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 3</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 4</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 5</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 6</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 7</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 8</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 9</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 10</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 11</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 12</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 13</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 14</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 15</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/">Home 16</Link>
          </li>
        </div>
      </ul>
    );
  }
}

export default MenuSidebar;
