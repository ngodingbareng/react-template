import React, { Component } from "react";
import Menu from "./Menu";

class HeaderMedia extends Component {
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
        <a className="btn-nav" onClick={this.openToggleNav}>
          &#9776;
        </a>
        {toggleNav ? (
          <div className="toggle-nav">
            <Menu />
          </div>
        ) : null}
      </div>
    );
  }
}

export default HeaderMedia;
