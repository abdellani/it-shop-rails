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
const ProductComment = ({
  comment,
  user_id,
  deleteComment,
  selectCommentToUpdate
}) => (
  <div className="my-2 shadow-lg p-3 mb-5 bg-white rounded ">
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
        {user_id == comment.owner.id && (
          <div>
            <button
              type="button"
              className="btn btn-warning mr-2"
              onClick={() => selectCommentToUpdate()}
            >
              Edit
            </button>
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
);
const EditCommentForm = ({
  comment,
  handleChange,
  updatedComment,
  submitUpdatedComment,
  cancelUpdate
}) => (
  <div className="my-2 shadow-lg p-3 mb-5 bg-white rounded ">
    <textarea
      className="py-4 px-2 rounded bg-light mb-2 form-control"
      value={updatedComment}
      id="updatedComment"
      onChange={e => handleChange(e)}
    ></textarea>
    <div>
      <div className="d-flex justify-content-between w-100">
        <div>
          <Link to={`/users/${comment.owner.id}`}>
            <span className="font-weight-bolder text-dark">
              @{comment.owner.name}{" "}
            </span>
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={submitUpdatedComment}
          >
            Submit
          </button>
          <button type="button" className="btn btn-danger"
          onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    <small className="text-muted">At {comment["created_at"]}</small>
  </div>
);
const ProductComments = ({
  comments,
  id, // user_id
  isAuthenticated,
  handleChange,
  handleSubmit,
  deleteComment,
  newComment,
  updatedComment,
  selectCommentToUpdate,
  selectedCommentToUpdate,
  submitUpdatedComment
}) => (
  <div style={{width:"80%"}}>
    <h3>Comments :</h3>
    {comments.map((comment, index) =>
      comment.id != selectedCommentToUpdate ? (
        <ProductComment
          key={index}
          comment={comment}
          user_id={id}
          selectCommentToUpdate={() =>
            selectCommentToUpdate({
              comment_id: comment.id,
              content: comment.content
            })
          }
          deleteComment={deleteComment}
        />
      ) : (
        <EditCommentForm
          key={index}
          updatedComment={updatedComment}
          comment={comment}
          handleChange={handleChange}
          submitUpdatedComment={submitUpdatedComment}
          cancelUpdate={() =>
            selectCommentToUpdate({
              comment_id: -1,
              content: ""
            })
          }
        />
      )
    )}
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
