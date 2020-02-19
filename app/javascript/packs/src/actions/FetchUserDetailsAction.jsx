import axios from "axios";
import {FETCH_USER_DETAILS} from "./types.js"
const FetchUserDetailsAction = ({ id }) => dispatch => {
  axios
    .get(`/api/users/${id}`)
    .then(response => {
      dispatch({
        type:FETCH_USER_DETAILS,
        userDetails: response.data
      })
    })
    .catch(err => console.log(err));
};

export default FetchUserDetailsAction;
