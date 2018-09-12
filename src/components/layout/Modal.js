import React, { Component } from "react";
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modalActions';

class Modal extends Component {
  closeModalBtn = () => {
    this.props.closeModal();
  }

  render() {
    const { modal } = this.props;

    if(modal) {
      return (
        <div className="backdrop">
          <div className="modal">
            <div className="modal-header color-primary">Modal Header <a className="close-modal" onClick={this.closeModalBtn}>&#10006;</a></div>
            <div className="modal-body">
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups.
              </p>
              <a className="button button-primary">Selengkapnya</a>
            </div>
          </div>
        </div>
      )
     } else {
      return (
        <div></div>
      )
     }
  }
}

const mapStateToProps = state => ({
  modal: state.modal.modal
});

export default connect(
  mapStateToProps,
  { openModal, closeModal }
)(Modal);

// export default Modal;
