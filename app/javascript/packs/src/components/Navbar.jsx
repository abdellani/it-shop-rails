import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedItems = () => (
  <li className="nav-item active">
    <Link className="nav-link" to="/products/new">
      Add new product
    </Link>
  </li>
);
const GuestItems = ()=>
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
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
                <Link className="dropdown-item" to="/signup">
                  Sign up
                </Link>
              </div>
            </li>
class Navbar extends React.Component {
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
            {isAuthenticated && <ProtectedItems />}
            {!isAuthenticated && <GuestItems />}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  let { token } = state;
  return {
    isAuthenticated: !!token ? true : false
  };
};
export default connect(mapStateToProps, false)(Navbar);
