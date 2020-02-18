import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import GuestRoute from "./containers/GuestRoute";
import ProtectedRoute from "./containers/ProtectedRoute"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductsPage from "./containers/ProductsPage";
import CreateProductPage from "./containers/CreateProductPage";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import Flash from "./components/Flash";
import Navbar from "./components/Navbar";
import MyProductsPage from "./containers/MyProductsPage"

const Application = props => (
  <Router>
    <Navbar />
    <main className="container">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <Flash />
      </div>
      <div className="row">
        <Switch>
          <Route
            path="/login"
            component={props => <GuestRoute {...props} Component={LoginPage} />}
          />
          <Route path="/signup">
            <GuestRoute Component={SignupPage} />
          </Route>
          <Route path="/products/new" 
          component={ props => <ProtectedRoute {...props} Component={CreateProductPage}/>} 
          />
          <Route path="/products/mine" 
          component={ props => <ProtectedRoute {...props} Component={MyProductsPage}/>} 
          /> 
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route>
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </main>
  </Router>
);
export default Application;
