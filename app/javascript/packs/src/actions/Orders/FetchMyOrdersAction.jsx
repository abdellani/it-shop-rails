import axios from "axios";
import { SET_ORDERS } from "../types";
const FetchMyOrdersAction = ({ token }) => dispatch => {
  return axios
    .get(`/api/loggedin/orders`, { params: { token } })
    .then(response => {
      let { orders } = response.data;
      dispatch({ type: SET_ORDERS, orders });
    })
    .catch(err => console.log(err));
};

export default FetchMyOrdersAction;
