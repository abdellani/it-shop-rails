class Api::Products::VisitsController < ApplicationController
  def index
    #TODO Add authentication & check if owner
    visits=Product.find_by_id(params[:product_id]).visits
    render json: {
      status:200,
      visits:visits.as_json(only:[:country,:city,:latitude,:longitude,:created_at])},
      status: 200 
  end
end
