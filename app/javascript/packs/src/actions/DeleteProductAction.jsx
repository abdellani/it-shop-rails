import axios from "axios";
import { ADD_FLASH } from "../actions/types";

const DeleteProductAction = ({ token, id }) => dispatch => {
  return axios
    .delete(`/api/loggedin/products/${id}`, { params: { token } })
    .then(
      response => {
        let { status, message } = response.data;
        dispatch({
          type: ADD_FLASH,
          messageType: status,
          message: message
        });
      }).catch(error => console.log(response));
};

export default DeleteProductAction;
