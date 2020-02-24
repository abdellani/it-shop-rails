import axios from "axios";
import { SET_PRODUCT_COMMENTS } from "../types";
const FetchProductCommentsAction = id => dispatch => {
  //TODO empty product field in the store
  return axios.get(`/api/products/${id}/comments`).then(response => {
    let { comments } = response.data;
    dispatch({
      type: SET_PRODUCT_COMMENTS,
      comments
    });
  });
};

export default FetchProductCommentsAction;
