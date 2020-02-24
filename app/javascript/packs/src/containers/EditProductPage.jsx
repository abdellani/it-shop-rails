import React from "react";
import { connect } from "react-redux";
import FetchProductDetailsAction from "../actions/Products/FetchProductDetailsAction";
import UpdateProductAction from "../actions/Products/UpdateProductAction";
import ProdcutForm from "../components/ProductForm";
class EditProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product_id:-1,
      name: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      photo: []
    };
  }
  componentDidMount() {
    let { product_id } = this.props.match.params;
    this.setState({product_id})
    this.props.fetchProductDetailsAction({ product_id }).then(() => {
      let { product } = this.props;
      let { name, description, price, quantity, category, photo } = product;
      this.setState({ name, description, price, quantity, category, photo });
    });
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let {token}=this.props
    this.props.updateProductAction({token,...this.state})
  }
  render() {
    return (
      <ProdcutForm
        {...this.state}
        handleChange={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
      />
    );
  }
}

const mapStateToProps = state => {
  let { product,token } = state;
  return {
    product,token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetailsAction: ({ product_id }) =>
      dispatch(FetchProductDetailsAction({ product_id })),
    updateProductAction: props => dispatch(UpdateProductAction(props))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);
