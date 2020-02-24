class Api::Loggedin::ProductsController < ApplicationController
  def index
    authenticate!
    render json: {
      status: 200,
      products: current_user.products.
        as_json(only: [:id, :name, :category, :price]),
    }
  end

  def update
    authenticate!
    product=current_user.products.find_by_id(params[:id])
    product.update_attributes(product_params)
    render json: {status: 200, message: "Product updated successfully !"}, status:200
  end

  def destroy
    authenticate!
    product = current_user.products.find_by_id(params[:id])
    #ADD depends on destroy
    product.photos.each{|photo| photo.destroy}
    product.comments.each{|comment| comment.destroy}
    product.destroy
    render json: { status: 200,
                  message: "Product deleted successfully" }
  end
  private
  def product_params
    params.require(:product).permit(:name,:description,:price,:quantity,:category)
  end
end
