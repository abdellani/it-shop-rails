class Api::CommentsController < ApplicationController
  def destroy
    authenticate!
    comment=current_user.comments.find_by_id(params[:id])
    comment.destroy
    render json: {status: 200, message:"Comment deleted successfully"}, status:200
  end
end
