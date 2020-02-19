class Api::Loggedin::CommentsController < ApplicationController
  def update
    authenticate!
    comment=current_user.comments.find_by_id(params[:id])
    comment.update(content:params[:content])
    render json: {status: 200, message: "comment updated successfully!"}, status: 200
  end
end
