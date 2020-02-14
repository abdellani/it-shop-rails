import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import GuestRoute from "./containers/GuestRoute";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import ProductsPage from "./containers/ProductsPage";
import CreateProductPage from "./containers/CreateProductPage";
import ProductDetailsPage from "./containers/ProductDetailsPage";

const Navbar = () => (
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
        <li className="nav-item active">
          <Link className="nav-link" to="/products/new">
            Add new product
          </Link>
        </li>
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
      </ul>
    </div>
  </nav>
);
const Application = () => (
  <Router>
    <Navbar />
    <main className="container">
      <div className="row">
        <Switch>
          <Route path="/login">
            <GuestRoute Component={LoginPage} />
          </Route>
          <Route path="/signup">
            <GuestRoute Component={SignupPage} />
          </Route>
          <Route path="/products/new">
            <CreateProductPage />
          </Route>
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route>
            {/* <Index /> */}
            <ProductsPage /> 
            {/* <ProductDetailsPage/> */}
          </Route>
        </Switch>
        {/* <SignupPage /> */}
        {/* <LoginPage /> */}
      </div>
    </main>
  </Router>
);
export default Application;
