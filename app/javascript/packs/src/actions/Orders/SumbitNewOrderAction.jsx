import axios from "axios"

const SubmitNewOrderAction = ({token,product_id,quantity})=> dispatch => {
  return axios.post("/api/loggedin/orders", {token,product_id,quantity}).catch(err=>console.log(err))
}

export default SubmitNewOrderAction;