import React from "react";

const NewCommentForm = ({ handleChange, handleSubmit, newComment }) => (
  <form
    onSubmit={e => handleSubmit(e)}
    className="my-2 shadow-lg p-3 mb-5 bg-white rounded "
  >
    <div className="form-group">
      <label htmlFor="newComment">New comment :</label>
      <textarea
        className="form-control"
        id="newComment"
        value={newComment}
        onChange={e => handleChange(e)}
        placeholder="Comment ..."
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

const ProductComments = ({
  comments,
  isAuthenticated,
  handleChange,
  handleSubmit,
  newComment
}) => (
  <div className="col-md-8">
    <h3>Comments :</h3>
    {comments.map((comment, id) => (
      <div className="my-2 shadow-lg p-3 mb-5 bg-white rounded " key={id}>
        <div className="py-4 px-2 rounded bg-light mb-2">{comment.content}</div>
        {
          //TODO Add link to user profile
        }
        <div>
          <span className="font-weight-bolder">@{comment.owner["name"]} </span>
        </div>
        <small className="text-muted">At {comment["created_at"]}</small>
      </div>
    ))}
    {isAuthenticated && (
      <NewCommentForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newComment={newComment}
      />
    )}
  </div>
);

export default ProductComments;
