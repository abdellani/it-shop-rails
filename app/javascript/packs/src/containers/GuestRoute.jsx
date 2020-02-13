import React from "react";
import { connect } from "react-redux";
const GuestRoute = class extends React.Component {
    constructor() {
      super();
    }
    render() {
      let {Component}=this.props
      if (this.props.token) return <div>you are not supposed to access to this page !</div>;
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
