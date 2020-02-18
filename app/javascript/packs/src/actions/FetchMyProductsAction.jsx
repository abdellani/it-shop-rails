import axios from "axios";
import { FETCH_MY_PRODUCTS } from "./types";
const FetchMyProductsAction = ({ token }) => dispatch => {
  axios
    .get(`/api/loggedin/products`, { params: { token } })
    .then(response => {
      let { products } = response.data;
      dispatch({ type: FETCH_MY_PRODUCTS, products });
    })
    .catch(error => console.log(error));
};

export default FetchMyProductsAction;
