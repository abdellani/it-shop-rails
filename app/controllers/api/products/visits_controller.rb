class Api::Products::VisitsController < ApplicationController
  def index
    authenticate!
    product=current_user.products.find_by_id(params[:product_id])
    return unless product    
    visits=product.visits
    render json: {
      status:200,
      visits:visits.as_json(only:[:country,:city,:latitude,:longitude,:created_at])},
      status: 200 
  end
end
