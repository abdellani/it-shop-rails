import axios from "axios"

const UpdateCommentAction = ({comment_id,content,token})=>dispatch=>{
  return axios.put(`/api/loggedin/comments/${comment_id}`,{token,content}).catch(err=> console.log(err))
}

export default UpdateCommentAction;