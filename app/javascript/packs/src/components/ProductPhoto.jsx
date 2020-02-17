import React from "react";
import axios from "axios";
class ProductPhoto extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      photo: ""
    };
  }
  componentDidMount() {
    let {photo}=this.state
    let { id } = this.props;
    if(photo ==""){
      this.fetchPhoto(id);
        
    }
  }
  componentDidUpdate(previousState) {
    let previousID = previousState.id;
    let { id } = this.props;
    if (id != previousID) {
      this.fetchPhoto(id);
    }
  }
  fetchPhoto(id) {
    //TODO Consider the case when the request crash
    axios.get(`/api/photos/${id}`).then(response => {
      let { photo } = response.data;
      this.setState({
        loading: false,
        photo
      });
    });
  }
  render() {
    let { loading, photo } = this.state;
    if (loading) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <img className="card-img-top" src={photo} />{" "}
        </div>
      );
    }
  }
}
export default ProductPhoto;
