import React, { Component } from "react";
import NotFoundImage from "../../assets/images/404.png";

class NotFound extends Component {
  render() {
    return (
      <div className="pd-notfound">
        <img src={NotFoundImage} alt="Not Found" className="notfound" />
      </div>
    );
  }
}

export default NotFound;
