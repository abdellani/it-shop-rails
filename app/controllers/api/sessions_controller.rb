class Api::SessionsController < ApplicationController
  def create
    authenticate! :password
    render json: {
      code: 200,
      message: "Authenticated successfully",
      id: current_user.id,
      token: generate_new_jwt_token(current_user)
    } 
  end

  def destroy
    #TODO Implement logout
  end

end
