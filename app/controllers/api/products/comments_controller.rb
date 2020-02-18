class Api::Products::CommentsController < ApplicationController
  def index
    product = Product.find_by_id(params[:product_id])
    if product
      render json: {
        status: 200,
        id: product.id,
        comments: product.comments.as_json({
          only: [:content,:created_at],
          include: [
            owner: { only: [:id, :name] },
          ],
        }),
      }
    else
      render json: { status: 404 }, status: 404
    end
  end
  def create
    authenticate!
    product=Product.find_by_id(params[:product_id])
    comment=product.comments.new(owner_id:current_user.id,content:params[:new_comment])
    if comment.save
      render json: {status: 200,message:"Comment created successfully !"}, status:200
    end
  end
end
