import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {ADD_FLASH} from "../actions/types.js"
class ProtectedRoute extends React.Component {
  render() {
    let { token, Component } = this.props;
    if (token) return <Component />;
    else {
      this.props.addFlash({messageType:"error",message:"You need to be authenticated !"})
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = state => {
  let { token } = state;
  return {
    token
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    addFlash: (props)=> dispatch({type:ADD_FLASH,...props})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
