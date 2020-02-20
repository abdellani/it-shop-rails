class Api::ProductsController < ApplicationController
  def index
    render json: {
      status: 200,
      products: Product.all.as_json(
        only: [:id,:name,:price,:category,:description],
        include:[photos:{only:[:id]}]
      )
    }
  end
  def show
    product=Product.find_by_id(params[:id])
    ip = request.remote_ip
    #TODO need additional verifications
    #TODO if the owner of the product, no need to save the visit
    if ip != "127.0.0.1"
      visit=product.visits.create({ip:ip})
      IpDetails.get_details(visit)
    end
    render json: {
      status: 200,
      product: product.as_json(
        include:[
          #TODO move photo to api/products/photos or send filename of the selected photo
          photos:{only:[:id]},
          owner:{only:[:name,:id]},
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
