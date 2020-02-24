import React,{Fragment} from "react";
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
      <div className="w-100 row my-3">
        {products &&
          products.map((product, id) => (
            <div key={id} className="col-md-4 my-2">
              <ProductCard  {...product} />
            </div>
          ))}
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
