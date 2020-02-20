import React from "react"
import {connect} from "react-redux"
import FetchProductVisits from "../actions/FetchProductVisitsAction"
import WorldMap from "../components/WorldMap"
class ProductsVisitsPage extends React.Component {
  componentDidMount(){
    let{product_id}= this.props.match.params
    this.props.fetchProductVisits({product_id})
  }
  render(){
    let {visits}=this.props
    return <div>
      <WorldMap  visits={visits}/>
    </div>
  }
}

const mapStateToProps = state =>{
  let {token, visits}=state 
  return {
    token,visits
  }
}

const mapDispatchToProps = dispach => {
  return {
    fetchProductVisits: ({token,product_id})=> dispach(FetchProductVisits({token,product_id}))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsVisitsPage)