import React, { Component } from "react";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modalActions';

class Home extends Component {
  openModalBtn = () => {
    this.props.openModal();
  }
  
  render() {

    return (
      <div>
        <div className="column">
          <div className="column-1">
            <div className="box">
              <div className="box-header color-primary">Judulnya</div>
              <div className="box-body">
                <p>Masih kosong</p>
                <p>Kosong...</p>
                <p>Astagfirullahaladzim</p>
                <a className="button button-primary" onClick={this.openModalBtn}>
                  Open Modal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { openModal }
)(Home);

// export default Home;
