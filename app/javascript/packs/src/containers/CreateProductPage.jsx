import React from "react";
import CreateProductForm from "../components/ProductForm";
import { connect } from "react-redux";
import CreateProductAction from "../actions/Products/CreateProductAction";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: 1.1,
      quantity: 1,
      category: "smartphone",
      photo: ""
    };
  }
  handleChange(e) {
    if (e.target.id === "photo")
      this.setState({
        [e.target.id]: e.target.files
      });
    else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    let { token,history } = this.props;
    let { photo } = this.state;
    let reader = new FileReader();
    reader.onloadend = e => {
      //TODO check if the file before sending the request to the server
      this.props.createProduct({ token,history, ...this.state, photo: e.target.result });
    };
    reader.readAsDataURL(photo[0]);
  }
  render() {
    return (
      <CreateProductForm
        {...this.state}
        handleChange={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
      />
    );
  }
}

const mapStateToProps = state => {
  let { id, token } = state;
  return { id, token };
};
const mapDispatchToProps = dispatch => {
  return {
    createProduct: props => dispatch(CreateProductAction(props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
