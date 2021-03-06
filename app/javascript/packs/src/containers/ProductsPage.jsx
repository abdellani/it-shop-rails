import React, { Fragment } from "react";
import { connect } from "react-redux";
import FetchProductsAction from "../actions/Products/FetchProductsAction";
import ProductCard from "../components/ProductCard";

class ProductPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    let { products } = this.props;

    return (
      <div
        className="d-flex flex-wrap justify-content-center my-3"
        style={{ maxWidth: "72rem" }}
      >
        {products &&
          products.map((product, id) => <ProductCard key={id} {...product} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { products } = state;
  return {
    products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(FetchProductsAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
