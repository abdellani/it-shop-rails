class Api::Loggedin::ProductsController < ApplicationController
  def index
    authenticate!
    render json: {
      status: 200,
      products: current_user.products.
        as_json(only: [:id, :name, :category, :price]),
    }
  end

  def destroy
    authenticate!
    product = current_user.products.find_by_id(params[:id])
    #ADD depends on destroy
    product.photos.each{|photo| photo.destroy}
    product.destroy
    render json: { status: 200,
                  message: "Product deleted successfully" }
  end
end
