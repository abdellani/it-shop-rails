import React from "react"
import axios from "axios"
class ProductPhoto extends React.Component {
  constructor(){
    super()
    this.state={
      loading:true,
      photo:""
    }
  }
  componentDidMount(){
    let {id}=this.props
    //TODO Consider the case when the request crash
    axios.get(`/api/photos/${id}`).then(
      response =>{
        let {photo}= response.data 
        this.setState({
          loading:false,
          photo
        })
      }
      )
  }
  render(){
    let {loading,photo}=this.state
    if(loading){
      return <div>Loading</div>
    }else{
      return <div><img src={photo}/> </div>
    }

  }
}
export default ProductPhoto;