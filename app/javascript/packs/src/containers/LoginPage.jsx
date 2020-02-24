import React from "react"
import LoginForm from "../components/LoginForm"
import {connect} from "react-redux"
import LoginAction from "../actions/Sessions/LoginAction"
class LoginPage extends React.Component {

  constructor(){
    super()
    this.state={
      email:"user1@example.com",
      password:"123456"
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