class Api::ProductsController < ApplicationController
  def index
    render json: {
      code: 200,
      data: Product.all.as_json(
        include:[photos:{only:[:id]}]
      )
    }
  end
end
