class Api::Loggedin::ProductsController < ApplicationController
  def index
    authenticate!
    byebug
    render json: {text: "data !"}
  end
end
