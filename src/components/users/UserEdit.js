import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userDetail, userUpdate } from "../../actions/userActions";
import TextInputGroup from "../layout/TextInputGroup";

class UserEdit extends Component {
  state = {
    username: "",
    password: "",
    nama: "",
    email: "",
    no_telp: "",
    loadPage: false,
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { username, password, nama, email, no_telp } = nextProps.user;
    this.setState({
      username,
      password,
      nama,
      email,
      no_telp
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.userDetail(id);
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({ loadPage: true });

    const { username, password, nama, email, no_telp } = this.state;

    // Check For Errors
    if (username === "") {
      this.setState({ errors: { username: "Username tidak boleh kosong" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password tidak boleh kosong" } });
      return;
    }

    if (nama === "") {
      this.setState({ errors: { nama: "Nama tidak boleh kosong" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email tidak boleh kosong" } });
      return;
    }

    if (no_telp === "") {
      this.setState({
        errors: { no_telp: "Nomor telepon tidak boleh kosong" }
      });
      return;
    }

    const { id } = this.props.match.params;

    const updateUser = {
      id,
      username,
      password,
      nama,
      email,
      no_telp
    };

    this.props.userUpdate(updateUser);

    //// SUBMIT CONTACT ////

    // Clear State
    this.setState({
      username: "",
      password: "",
      nama: "",
      email: "",
      no_telp: "",
      errors: {}
    });

    this.props.history.push("/users");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password, nama, email, no_telp, errors } = this.state;

    return (
      <div className="column-1">
        <div className="box">
          <div className="box-header color-primary">Edit User</div>
          <div className="box-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Username"
                name="username"
                placeholder="Masukkan Username"
                value={username}
                onChange={this.onChange}
                error={errors.username}
                disabled="true"
              />
              <TextInputGroup
                label="Password"
                name="password"
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={this.onChange}
                error={errors.password}
                disabled="true"
              />
              <TextInputGroup
                label="Nama"
                name="nama"
                placeholder="Masukkan Nama"
                value={nama}
                onChange={this.onChange}
                error={errors.nama}
              />
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextInputGroup
                label="Nomor Telepon"
                name="no_telp"
                placeholder="Masukkan Nomor Telepon"
                value={no_telp}
                onChange={this.onChange}
                error={errors.no_telp}
              />

              <input
                type="submit"
                value="Submit"
                className="button button-primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UserEdit.propTypes = {
  user: PropTypes.object.isRequired,
  userDetail: PropTypes.func.isRequired,
  userUpdate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { userDetail, userUpdate }
)(UserEdit);
