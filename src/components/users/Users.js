import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/userActions";
import Loading from "../loading/Loading";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPage: true
    };
  }

  componentDidMount() {
    this.props.getUsers();
    this.setState({ loadPage: false });
  }

  render() {
    const { users } = this.props;
    const { loadPage } = this.state;

    if (!loadPage) {
      return (
        <React.Fragment>
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </React.Fragment>
      );
    } else {
      return <Loading width="100px" />;
    }
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
