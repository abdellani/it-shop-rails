import axios from "axios";
import { LOGIN,ADD_NOTIFICATION } from "../actions/types";
const SignupAction = props => dispatch => {
  let { name,email, password,password_confirmation } = props;
  axios
    .post("api/users", { user:{ name,email, password,password_confirmation }  })
    .then(response => {
      dispatch({
        type: LOGIN,
        id: response.data.id,
        token: response.data.token,
      })
      dispatch({
        type:ADD_NOTIFICATION,
        message:response.data.message 
      })
      ;
    })
    .catch(error => console.log(error.response.data));
};

export default SignupAction;
