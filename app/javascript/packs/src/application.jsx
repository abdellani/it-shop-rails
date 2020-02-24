import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import GuestRoute from "./containers/GuestRoute";
import ProtectedRoute from "./containers/ProtectedRoute";
import ProductsPage from "./containers/ProductsPage";
import CreateProductPage from "./containers/CreateProductPage";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import Flash from "./components/Flash";
import Navbar from "./components/Navbar";
import MyProductsPage from "./containers/MyProductsPage";
import UserPage from "./containers/UserPage";
import NotificationsPage from "./containers/NotificationsPage";
import ProductsVisitsPage from "./containers/ProductsVisitsPage";
import EditProductPage from "./containers/EditProductPage"

const Application = props => (
  <Router>
    <Navbar />
    <main className="container">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <Flash />
      </div>
      <div className="row justify-content-center">
        <Switch>
          <Route
            path="/login"
            component={props => <GuestRoute {...props} Component={LoginPage} />}
          />
          <Route path="/signup">
            <GuestRoute Component={SignupPage} />
          </Route>
          <Route
            path="/products/new"
            component={props => (
              <ProtectedRoute {...props} Component={CreateProductPage} />
            )}
          />
          {/*TODO protect the route */}
          <Route path="/user/products/:product_id/visits" component={ProductsVisitsPage} />
          <Route
            path="/user/products"
            component={props => (
              <ProtectedRoute {...props} Component={MyProductsPage} />
            )}
          />
          <Route
            path="/user/notifications"
            component={props => (
              <ProtectedRoute {...props} Component={NotificationsPage} />
            )}
          />
          <Route
            path="/products/:product_id/edit"
            component={props => (
              <ProtectedRoute {...props} Component={EditProductPage} />
            )}
          />
          EditProductPage
          <Route path="/products/:product_id" component={ProductDetailsPage} />
          <Route path="/users/:id" component={UserPage} />
          <Route>
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </main>
  </Router>
);
export default Application;
