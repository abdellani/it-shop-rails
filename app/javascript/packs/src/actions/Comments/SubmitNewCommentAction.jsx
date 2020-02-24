import axios from "axios"

const SubmitNewCommentAction = ({token, product_id, newComment})=> dispatch =>{
  //ADD flash message
  return axios.post(`/api/products/${product_id}/comments`,{token, new_comment:newComment}).catch(err => console.log(err))
}

export default SubmitNewCommentAction;