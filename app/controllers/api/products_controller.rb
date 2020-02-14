class Api::ProductsController < ApplicationController
  def index
    render json: {
      status: 200,
      products: Product.all.as_json(
        only: [:id,:owner_id,:name,:price,:category,:description],
        include:[photos:{only:[:id]}]
      )
    }
  end
  def show
    render json: {
      status: 200,
      product: Product.find_by_id(params[:id]).as_json(
        include:[
          photos:{only:[:id]},
          owner:{only:[:name,:id]}
        ]
      )
    }
  end
  def create
    authenticate!
    product=current_user.products.new(product_params)
    if product.save
      photo=product.photos.new(content: params[:product][:photo])
      photo.save
      render json: {
        status: 200,
        message: "Product create successfully",
      }
    else 
      render json: {status:422, message: "Product can't be create"}, status: 422     
    end
  end
  private
  def product_params
    params.require(:product).permit(:name,:description,:price,:quantity,:category)
  end 
end
