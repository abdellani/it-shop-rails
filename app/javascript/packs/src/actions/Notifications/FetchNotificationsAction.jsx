import axios from "axios";
import { SET_NOTIFICATIONS } from "../types.js";
const FetchNotificationsAction = ({ token }) => dispatch => {
  return axios
    .get("/api/loggedin/notifications", { params: { token } })
    .then(response => {
      let { notifications } = response.data;
      dispatch({ type:SET_NOTIFICATIONS, notifications });
    })
    .catch(err => console.log(err));
};

export default FetchNotificationsAction;
