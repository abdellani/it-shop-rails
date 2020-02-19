import React from "react";
import { Link } from "react-router-dom";
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
  id, // user_id
  isAuthenticated,
  handleChange,
  handleSubmit,
  deleteComment,
  newComment
}) => (
  <div className="col-md-8">
    <h3>Comments :</h3>
    {comments.map((comment, index) => (
      <div className="my-2 shadow-lg p-3 mb-5 bg-white rounded " key={index}>
        <div className="py-4 px-2 rounded bg-light mb-2">{comment.content}</div>
        <div>
          <div className="d-flex justify-content-between w-100">
            <div>
              <Link to={`/users/${comment.owner.id}`}>
                <span className="font-weight-bolder text-dark">
                  @{comment.owner.name}{" "}
                </span>
              </Link>
            </div>
            {id == comment.owner.id && (
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
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
