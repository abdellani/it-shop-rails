import React from "react"
import {connect} from "react-redux"
import FetchMyOrdersAction from "../actions/Orders/FetchMyOrdersAction"
import MyOrdersPanel from "../components/MyOrdersPanel"
class MyOrdersPage extends React.Component {
  componentDidMount(){
    let{token}= this.props
    this.props.fetchMyOrders({token})
  }
  render (){
    return (<MyOrdersPanel  {...this.props}/>)
  }
}


const mapStateToProps = state=>{
  let {token,orders}= state 
  return {
    token,orders
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    fetchMyOrders:({token})=>dispatch(FetchMyOrdersAction({token}))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyOrdersPage)