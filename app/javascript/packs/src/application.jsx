import React from "react";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import GuestRoute from "./containers/GuestRoute";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

const Index = () => <div>index page</div>;
const Application = () => (
  <Router>
    <div>
      <Link to="login">login</Link>
      <Link to="signup">signup</Link>
      <Link to="/">home</Link>
    </div>
    <Switch>
      <Route path="/login">
        <GuestRoute Component={LoginPage} />
      </Route>
      <Route path="/signup">
        <GuestRoute Component={SignupPage} />
      </Route>
      <Route>
        <Index />
      </Route>
    </Switch>
    {/* <SignupPage /> */}
    {/* <LoginPage /> */}
  </Router>
);
export default Application;
