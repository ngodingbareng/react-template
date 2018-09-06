import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userInsert } from "../../actions/userActions";
import TextInputGroup from "../layout/TextInputGroup";

class UserInsert extends Component {
  state = {
    username: "",
    password: "",
    nama: "",
    email: "",
    no_telp: "",
    loadPage: false,
    errors: {}
  };

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

    const newUser = {
      username,
      password,
      nama,
      email,
      no_telp
    };

    this.props.userInsert(newUser);

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
          <div className="box-header color-primary">Tambah User</div>
          <div className="box-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Username"
                name="username"
                placeholder="Masukkan Username"
                value={username}
                onChange={this.onChange}
                error={errors.username}
              />
              <TextInputGroup
                label="Password"
                name="password"
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={this.onChange}
                error={errors.password}
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

UserInsert.propTypes = {
  userInsert: PropTypes.func.isRequired
};

export default connect(
  null,
  { userInsert }
)(UserInsert);
