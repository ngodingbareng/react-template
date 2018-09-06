import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userDelete } from "../../actions/userActions";

class User extends Component {
  onDelete = id => {
    this.props.userDelete(id);
  };

  render() {
    const { id, nama, email, no_telp } = this.props.user;

    return (
      <div>
        <div className="column-2">
          <div className="box">
            <div className="box-header color-primary">
              <div className="box-label">{nama}</div>
              <div
                className="button-danger button-hapus"
                onClick={this.onDelete.bind(this, id)}
              >
                Hapus
              </div>
              <Link
                to={`/user/edit/${id}`}
                className="button-default button-hapus"
              >
                Edit
              </Link>
            </div>
            <div className="box-body">
              <div className="table-responsive">
                <table>
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>Nomor Telepon</td>
                      <td>{no_telp}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  userDelete: PropTypes.func.isRequired
};

export default connect(
  null,
  { userDelete }
)(User);
