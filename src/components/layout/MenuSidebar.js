import React, { Component } from "react";
import MenuSidebarDetail from "./MenuSidebarDetail";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenu } from "../../actions/menuActions";

class MenuSidebar extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    const { menu } = this.props;

    return (
      <ul className="sidebar-nav">
        <div className="sidebar-menu-scroll">
          <li className="sidebar-title">
            <div>MAIN MENU</div>
          </li>
          {menu.map(menus => (
            <MenuSidebarDetail key={menus.id} menus={menus} />
          ))}
        </div>
      </ul>
    );
  }
}

MenuSidebar.propTypes = {
  menu: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menu: state.menu.menu
});

export default connect(
  mapStateToProps,
  { getMenu }
)(MenuSidebar);
