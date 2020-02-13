import React from "react"
import SignupForm from "../components/SignupForm"
import axios from "axios"
class SignupPage extends React.Component {
  constructor(){
    super()
    this.state={
      email:"",
      name:"",
      password:"",
      password_confirmation:""
    }
  }
  handleChange(e){
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    axios.post("api/users",
    {user:{...this.state}}
    ).then(
      (response)=> console.log(response)
    ).catch(
      (err)=> console.log(err.response.data)
    )
  }
  render(){
    return(
      <SignupForm 
        {...this.state}
        handleChange={(e)=> this.handleChange(e)}
        handleSubmit={(e)=> this.handleSubmit(e)}
      />
    )
  }
}

export default SignupPage;