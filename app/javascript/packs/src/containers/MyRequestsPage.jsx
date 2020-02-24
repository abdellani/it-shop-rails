import React from "react";
import { connect } from "react-redux";
import FetchMyRequestsAction from "../actions/Orders/FetchMyRequestsAction";
import MyRequestsPanel from "../components/MyRequestsPanel";
class MyRequestsPage extends React.Component {
  componentDidMount() {
    let { token } = this.props;
    this.props.fetchMyRequests({ token });
  }
  render() {
    return <MyRequestsPanel {...this.props} />;
  }
}

const mapStateToProps = state => {
  let { token, requests } = state;
  return {
    token,
    requests
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMyRequests: ({ token }) => dispatch(FetchMyRequestsAction({ token }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRequestsPage);
