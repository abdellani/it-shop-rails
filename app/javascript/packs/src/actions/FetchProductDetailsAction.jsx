import axios from "axios";
import { FETCH_PRODUCT_DETAILS } from "./types";
const FetchProductDetailsAction = id => dispatch => {
  //TODO empty product field in the store
  return axios.get(`/api/products/${id}`).then(response => {
    let { product } = response.data;
    dispatch({
      type: FETCH_PRODUCT_DETAILS,
      product
    });
  });
};

export default FetchProductDetailsAction;
