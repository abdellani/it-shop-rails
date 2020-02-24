import axios from "axios"

const DeleteCommentAction = ({comment_id,token}) => dispatch =>{
  return axios.delete(`/api/comments/${comment_id}`,{params:{token}}).catch(err=>console.log(err))

}
export default DeleteCommentAction;