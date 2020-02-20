import axios from "axios";
import {SET_NOTIFICATIONS_COUNT} from "./types"
const FetchNotificationsCountAction = ({ token }) => dispatch => {
  return axios
    .get("/api/loggedin/notifications/count", { params: { token } })
    .then(response => {
      let{count}=response.data
      dispatch({type:SET_NOTIFICATIONS_COUNT,
      count})
    })
    .catch(err => console.log(err));
};

export default FetchNotificationsCountAction;
