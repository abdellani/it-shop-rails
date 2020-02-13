import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";

const GuestRoute = class extends React.Component {
    constructor() {
      super();
    }
    render() {
      let {Component}=this.props
      if (this.props.token) return <Redirect to="/" />;
      else return <Component/>;
    }
  };

const mapStateToProps = state => {
  let { token } = state;
  return {
    token
  };
};

export default connect(mapStateToProps, null)(GuestRoute);
