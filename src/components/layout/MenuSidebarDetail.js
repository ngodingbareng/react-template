import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class MenuSidebarDetail extends Component {
  state = {
    openTarget: false
  }

  onClickHandler = e => {
    this.setState({
      openTarget: !this.state.openTarget
    });
  }

  render() {
    const {  nama, url, parent } = this.props.menus;
    const { openTarget } = this.state;

    return (
      <div>
        { parent === '0' ? (
          <li className="sidebar-item dropdown-sidebar-nav" onClick={this.onClickHandler.bind(this)}>
            <a className="dropdown-sidebar-nav-btn">{ nama }</a>
            <div className={ openTarget ? "dropdown-sidebar-nav-content buka" : "dropdown-sidebar-nav-content" }>
              <Link to="/users">Data Users</Link>
              <Link to="/user/add">Tambah User</Link>
            </div>
          </li>
        ) : null }
        { !parent ? (
          <li className="sidebar-item">
            <Link to={ url }>{ nama }</Link>
          </li>
        ) : null }
      </div>
    );
  }
}

MenuSidebarDetail.propTypes = {
  menus: PropTypes.object.isRequired
}

export default MenuSidebarDetail;
