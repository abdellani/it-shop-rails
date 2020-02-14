import axios from "axios";
import { FETCH_PRODUCTS } from "./types";
const FetchProductsAction = props => dispatch => {
  axios
    .get("/api/products")
    .then(response =>
      dispatch({
        type: FETCH_PRODUCTS,
        products: response.data.products
      })
    )
    .catch(error => console.log(error.response.data));
};

export default FetchProductsAction;