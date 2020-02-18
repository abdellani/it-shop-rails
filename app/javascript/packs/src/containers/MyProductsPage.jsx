import React from "react";
import { connect } from "react-redux";
import FetchMyProductsAction from "../actions/FetchMyProductsAction";
import MyProducts from "../components/MyProducts";
import DeleteProductAction from "../actions/DeleteProductAction";
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
