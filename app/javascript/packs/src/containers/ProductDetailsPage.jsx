import React, { Fragment } from "react";
import { connect } from "react-redux";
import FetchProductDetailsAction from "../actions/FetchProductDetailsAction";
import FetchProductComments from "../actions/FetchProductCommentsAction";
import ProductDetails from "../components/ProductDetails";
import ProductComments from "../components/ProductComments";
import SubmitNewCommentAction from "../actions/SubmitNewCommentAction";
import DeleteCommentAction from "../actions/DeleteCommentAction";
import UpdateCommentAction from "../actions/UpdateCommentAction";
class ProductDetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product_id: -1,
      selectedCommentToUpdate: -1,
      loading: true,
      newComment: "",
      updatedComment: ""
    };
  }
  selectCommentToUpdate({ comment_id, content }) {
    this.setState({
      selectedCommentToUpdate: comment_id,
      updatedComment: content
    });
  }
  submitUpdatedComment() {
    let { token } = this.props;
    let { selectedCommentToUpdate, updatedComment,product_id } = this.state;
    this.setState({
      selectedCommentToUpdate: -1,
      updatedComment: ""
    });
    this.props.updateCommentAction({
      product_id,
      token,
      comment_id: selectedCommentToUpdate,
      content: updatedComment
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let { token } = this.props;
    let { product_id, newComment } = this.state;
    this.props.submitNewComment({ token, product_id, newComment });
    this.setState({ newComment: "" });
  }
  deleteComment(comment_id) {
    let { product_id } = this.state;
    let { token } = this.props;
    this.props.deleteComment({ comment_id, product_id, token });
  }
  componentDidMount() {
    let { product_id } = this.props.match.params;
    this.setState({ product_id });
    this.props.fetchProductDetails(product_id);
    this.props.fetchProductComments(product_id);
  }
  render() {
    let { product } = this.props;
    let { newComment, updatedComment, selectedCommentToUpdate } = this.state;
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
              updatedComment={updatedComment}
              handleChange={e => this.handleChange(e)}
              handleSubmit={e => this.handleSubmit(e)}
              deleteComment={comment_id => this.deleteComment(comment_id)}
              selectCommentToUpdate={comment_id =>
                this.selectCommentToUpdate(comment_id)
              }
              selectedCommentToUpdate={selectedCommentToUpdate}
              submitUpdatedComment={() => this.submitUpdatedComment()}
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
  let { product, comments, token, id } = state;
  let isAuthenticated = !!token;
  return {
    product,
    comments,
    isAuthenticated,
    token,
    id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetails: id => dispatch(FetchProductDetailsAction(id)),
    fetchProductComments: id => dispatch(FetchProductComments(id)),
    submitNewComment: ({ token, product_id, newComment }) => {
      dispatch(
        SubmitNewCommentAction({ token, product_id, newComment })
      ).then(() => dispatch(FetchProductComments(product_id)));
    },
    deleteComment: ({ product_id, comment_id, token }) =>
      dispatch(DeleteCommentAction({ comment_id, token })).then(() =>
        dispatch(FetchProductComments(product_id))
      ),
    updateCommentAction: ({ token, product_id, comment_id, content }) =>
      dispatch(UpdateCommentAction({ token, comment_id, content })).then(() =>
        dispatch(FetchProductComments(product_id))
      )
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailsPage);
