import React, { Component } from "react";
import MenuSidebar from "./MenuSidebar";
import Brand from "./Brand";

class Sidebar extends Component {
  state = {
    toggleNav: false
  };

  openToggleNav = e => {
    this.setState({
      toggleNav: !this.state.toggleNav
    });
  };
  render() {
    const { toggleNav } = this.state;
  
    return (
      <div>
        <div className="sidebar-default">
          <nav className="sidebar">
            <Brand branding="React Template" />
            <div className="container-sidebar">
              <MenuSidebar />
            </div>
          </nav>
        </div>
        {toggleNav ? (
          <div className="sidebar-media">
            <nav className="sidebar">
              <a className="sidebar-btn sidebar-open" onClick={this.openToggleNav}>
                &#9776;
              </a>
              <div className="container-sidebar">
                <MenuSidebar />
              </div>
            </nav>
          </div>
        ) : (
          <div className="sidebar-media sidebar-media-close">
            <a className="sidebar-btn sidebar-close" onClick={this.openToggleNav}>
              &#9776;
            </a>
          </div>
        )}
      </div>
    );
  }
};

export default Sidebar;
