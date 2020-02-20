import axios from "axios";
import {SET_VISITS} from "./types"
const FetchProductVisitsAction = ({ product_id, token }) => dispatch=>{
  return axios
    .get(`/api/products/${product_id}/visits`, { params: { token } }).then(
      response =>{
        let {visits}= response.data
        dispatch({
          type:SET_VISITS,
          visits
        })
      }
    )
    .catch(err => console.log(err));
};
export default FetchProductVisitsAction;
