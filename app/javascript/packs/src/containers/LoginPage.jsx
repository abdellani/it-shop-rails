import React from "react"
import LoginForm from "../components/LoginForm"
import axios from "axios"
import {connect} from "react-redux"
import LoginAction from "../actions/LoginAction"
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
    this.props.login({email,password})
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

const mapDispatchToProps=(dispatch)=>{
  return{
    login: (props)=> dispatch(LoginAction(props))
  }
}

export default connect(null,mapDispatchToProps)(LoginPage);