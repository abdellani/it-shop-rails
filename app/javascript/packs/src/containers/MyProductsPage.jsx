import React from "react"
import {connect} from "react-redux"
import FetchMyProductsAction from "../actions/FetchMyProductsAction"
class MyProductsPage extends React.Component{
  componentDidMount(){
    let {token} = this.props
    this.props.fetchMyProducts({token})
  }
  render(){
    return(<div>
      my products
    </div>)
  }
}

const mapStateToProps = state => {
  let {token} = state
  return {
    token
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    fetchMyProducts : ({token}) =>dispatch(FetchMyProductsAction({token}))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyProductsPage);