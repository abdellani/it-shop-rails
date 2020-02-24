import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FetchNotificationsCount from "../actions/Notifications/FetchNotificationsCountAction";

const ProtectedItems = ({ notificationsCount }) => (
  <Fragment>
    <li className="nav-item dropdown active">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Products
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to="/products/new">
          Add new product
        </Link>
        <Link className="dropdown-item" to="/user/products">
          My products
        </Link>
      </div>
    </li>
    <li className="nav-item dropdown active">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Orders
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to="/user/orders">
          My orders
        </Link>
        <Link className="dropdown-item" to="/user/requestes">
          Requests
        </Link>
      </div>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/user/notifications">
        Notifications{" "}
        <span className=" badge badge-danger">{notificationsCount}</span>
      </Link>
    </li>
  </Fragment>
);
const GuestItems = () => (
  <li className="nav-item dropdown active">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdownMenuLink"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Login / Signup
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <Link className="dropdown-item" to="/login">
        Login
      </Link>
      <Link className="dropdown-item" to="/signup">
        Sign up
      </Link>
    </div>
  </li>
);
class Navbar extends React.Component {
  constructor() {
    super();
    this.periodicCheckNotifcationCount = setInterval(
      () => this.checkNotifcationCount(),
      60000
    );
  }
  componentDidUpdate() {
    let { token } = this.props;
    if (!!token) {
      this.props.fetchNotificationsCount({ token });
    }
  }
  checkNotifcationCount() {
    let { token } = this.props;
    if (!!token) {
      this.props.fetchNotificationsCount({ token });
    }
  }
  componentWillUnmount() {
    clearInterval(this.periodicCheckNotifcationCount);
  }
  render() {
    let { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          IT-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isAuthenticated && <ProtectedItems {...this.props} />}
            {!isAuthenticated && <GuestItems />}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  let { token, notifications } = state;
  let { count } = notifications;
  return {
    token,
    isAuthenticated: !!token ? true : false,
    notificationsCount: count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchNotificationsCount: ({ token }) => {
      dispatch(FetchNotificationsCount({ token }));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
