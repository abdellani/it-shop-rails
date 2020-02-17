import axios from "axios";
import { LOGIN, ADD_NOTIFICATION, SET_FLASH } from "../actions/types";
const LoginAction = props => dispatch => {
  let { email, password } = props;
  axios
    .post("api/sessions", { email, password })
    .then(response => {
      dispatch({
        type: LOGIN,
        id: response.data.id,
        token: response.data.token
      });
    })
    .then(() =>
      dispatch({
        type: SET_FLASH,
        messageType: "success",
        message:"Authenticated successfully !"
      })
    )
    .catch(error => {
      console.log(error);
      let { status, message } = error.response.data;
      dispatch({
        type: SET_FLASH,
        messageType: "error",
        message
      });
    });
};

export default LoginAction;
