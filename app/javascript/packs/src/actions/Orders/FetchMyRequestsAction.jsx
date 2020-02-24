import axios from "axios"
import {SET_REQUESTS} from "../types"
const FetchMyRequestsAction = ({token})=> dispatch =>{
  axios.get(`/api/loggedin/requests`,{params:{token}}).then(response=>
    {
      let {requests}= response.data
      console.log(requests)
      dispatch({
        type:SET_REQUESTS,
        requests
      })
    }).catch(err=> console.log(err))
}

export default FetchMyRequestsAction 