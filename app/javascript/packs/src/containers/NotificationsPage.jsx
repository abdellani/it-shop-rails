import React,{Fragment} from "react";
import { connect } from "react-redux";
import FetchNotificationsAction from "../actions/FetchNotificationsAction";
import FetchNotificationsCountAction from "../actions/FetchNotificationsCountAction";
import Notifications from "../components/Notifications"

class NotificationsPage extends React.Component {
  componentDidMount() {
    let { token } = this.props;
    this.props.fetchNotifications({ token });
  }
  render() {
    let {notifications}=this.props
    return <Fragment>
      <Notifications notifications={notifications}/>
    </Fragment>;
  }
}

const mapStateToProps = state => {
  let { token,notifications } = state;
  notifications=notifications.notifications
  return {
    token,
    notifications
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchNotifications: ({ token }) =>
      dispatch(FetchNotificationsAction({ token })).then(() =>
        dispatch(FetchNotificationsCountAction({ token }))
      )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);
