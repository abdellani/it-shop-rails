class Api::SessionsController < ApplicationController
  def create
    authenticate! :password
    render json: {
      code: 200,
      message: "Authenticated successfully",
      token: generate_new_token
    } 
  end
  def destroy
  end

  private
  def generate_new_token
    current_user.regenerate_access_token
    payload= {
      id:current_user.id,
      access_token:current_user.access_token
    }
    #TODO Add expiration data
    token = JWT.encode payload, ENV['JWT_PASSWORD'], 'HS256'
  end
end
