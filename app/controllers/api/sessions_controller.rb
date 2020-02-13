class Api::SessionsController < ApplicationController
  def create
    authenticate! :password
    render json: {
      code: 200,
      message: "Authenticated successfully",
      token: generate_new_jwt_token(current_user)
    } 
  end

  def destroy
  end

end
