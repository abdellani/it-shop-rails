import React from "react"
import {connect} from "react-redux"
import FetchProductDetails from "../actions/FetchProductDetailsAction"
import ProductDetails from "../components/ProductDetails"
class ProductDetailsPage extends React.Component {
  constructor(){
    super()
    this.state={
      loading:true
    }
  }
  componentDidMount(){
    console.log(this.props.match.params)
    let {id }= this.props.match.params
    this.props.fetchProductDetails(id)
  }
  render(){
    let {product} = this.props
    if(product){
      return <ProductDetails {...product}/>
    }else{
      return <div>Loading</div>
    }
  }
}

const mapStatetoProps= state=>{
  let {product}= state
  return {
    product
  }
}
const mapDispatchToProps= dispatch =>{
  return {
    fetchProductDetails: props => dispatch(FetchProductDetails(props))
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ProductDetailsPage)