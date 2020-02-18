import React, { Fragment } from "react";
import { connect } from "react-redux";
import FetchProductDetailsAction from "../actions/FetchProductDetailsAction";
import FetchProductComments from "../actions/FetchProductCommentsAction";
import ProductDetails from "../components/ProductDetails";
import ProductComments from "../components/ProductComments";
import SubmitNewCommentAction from "../actions/SubmitNewCommentAction";

class ProductDetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      loading: true,
      newComment: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let { token } = this.props;
    let { id, newComment } = this.state;
    this.props.submitNewComment({ token, id, newComment });
    this.setState({ newComment: "" });
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    this.setState({ id });
    this.props.fetchProductDetails(id);
    this.props.fetchProductComments(id);
  }
  render() {
    let { product } = this.props;
    let { newComment } = this.state;
    if (product) {
      return (
        <Fragment>
          <div className="row justify-content-center w-100">
            <ProductDetails {...product} />
            </div>
          <div className="row justify-content-center w-100">
            <ProductComments
              {...this.props}
              newComment={newComment}
              handleChange={e => this.handleChange(e)}
              handleSubmit={e => this.handleSubmit(e)}
            />
          </div>
        </Fragment>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStatetoProps = state => {
  let { product, comments, token } = state;
  let isAuthenticated = !!token;
  return {
    product,
    comments,
    isAuthenticated,
    token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetails: id => dispatch(FetchProductDetailsAction(id)),
    fetchProductComments: id => dispatch(FetchProductComments(id)),
    submitNewComment: ({ token, id, newComment }) =>
      dispatch(SubmitNewCommentAction({ token, id, newComment })).then(() =>
        dispatch(FetchProductComments(id))
      )
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailsPage);
