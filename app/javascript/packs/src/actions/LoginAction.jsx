import axios from "axios";
import { LOGIN,ADD_NOTIFICATION } from "../actions/types";
const LoginAction = props => dispatch => {
  let { email, password } = props;
  axios
    .post("api/sessions", { email, password })
    .then(response => {
      dispatch({
        type: LOGIN,
        token: response.data.token
      })
      dispatch({
        type:ADD_NOTIFICATION,
        message:response.data.message 
      })
      ;
    })
    .catch(error => console.log(error.response.data));
};

export default LoginAction;
