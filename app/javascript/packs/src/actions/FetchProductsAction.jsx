import axios from "axios";
import { SET_PRODUCTS } from "./types";
const FetchProductsAction = props => dispatch => {
  axios
    .get("/api/products")
    .then(response =>
      dispatch({
        type: SET_PRODUCTS,
        products: response.data.products
      })
    )
    .catch(error => console.log(error.response.data));
};

export default FetchProductsAction;