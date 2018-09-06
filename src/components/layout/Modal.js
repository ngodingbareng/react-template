import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          <div className="modal-header color-primary">Modal Header</div>
          <div className="modal-body">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a className="button button-primary">Selengkapnya</a>
              <a className="button button-dark">Selengkapnya</a>
              <a className="button button-default">Selengkapnya</a>
              <a className="button button-danger">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
