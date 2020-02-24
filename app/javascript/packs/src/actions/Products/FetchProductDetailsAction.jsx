import axios from "axios";
import { SET_PRODUCT_DETAILS } from "../types";
const FetchProductDetailsAction = ({product_id}) => dispatch => {
  //TODO empty product field in the store
  return axios.get(`/api/products/${product_id}`).then(response => {
    let { product } = response.data;
    dispatch({
      type: SET_PRODUCT_DETAILS,
      product
    });
  });
};

export default FetchProductDetailsAction;
