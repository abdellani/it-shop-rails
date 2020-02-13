import React from "react"
import SignupForm from "../components/SignupForm"
import {connect} from "react-redux"
import SignupAction from "../actions/SignupAction"
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
    this.props.signup({...this.state})
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

const mapDispatchToProps= (dispatch)=>{
  return {
    signup: (props)=>dispatch(SignupAction(props))
  }
}
export default connect(null,mapDispatchToProps)(SignupPage);