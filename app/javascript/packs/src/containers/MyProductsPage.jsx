import React from "react";
import { connect } from "react-redux";
import DeleteProductAction from "../actions/Products/DeleteProductAction";
import FetchMyProductsAction from "../actions/Products/FetchMyProductsAction";
import MyProducts from "../components/MyProducts";
class MyProductsPage extends React.Component {
  componentDidMount() {
    let { token } = this.props;
    this.props.fetchMyProducts({ token });
  }
  render() {
    let { token, deleteProduct } = this.props;
    return (
      <MyProducts
        {...this.props}
        deleteProduct={id => deleteProduct({ token, id })}
      />
    );
  }
}

const mapStateToProps = state => {
  let { token, myProducts } = state;
  return {
    token,
    myProducts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMyProducts: ({ token }) => dispatch(FetchMyProductsAction({ token })),
    deleteProduct: ({ token, id }) =>
      dispatch(DeleteProductAction({ token, id })).then(() =>
      dispatch(FetchMyProductsAction({ token }))
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProductsPage);
