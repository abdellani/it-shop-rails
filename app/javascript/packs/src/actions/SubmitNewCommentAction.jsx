import axios from "axios"

const SubmitNewCommentAction = ({token, id, newComment})=> dispatch =>{
  //ADD flash message
  return axios.post(`/api/products/${id}/comments`,{token, new_comment:newComment}).catch(err => console.log(err))
}

export default SubmitNewCommentAction;