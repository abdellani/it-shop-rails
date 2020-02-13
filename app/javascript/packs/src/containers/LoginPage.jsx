import React from "react"
import LoginForm from "../components/LoginForm"
import axios from "axios"
class LoginPage extends React.Component {

  constructor(){
    super()
    this.state={
      email:"test@test.com",
      password:""
    }
  }
  handleChange(e){
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    let {email,password}=this.state
    axios.post("api/sessions",
      {email,password}
    ).then(
      (response)=> console.log(response)
    ).catch(
      (error)=> console.log(error.response.data)
    )
  }
  render(){
    return (
      <LoginForm
        {...this.state}
        handleChange={(e)=>this.handleChange(e)}
        handleSubmit={(e)=>this.handleSubmit(e)}
      />
    )
  }

}

export default LoginPage;