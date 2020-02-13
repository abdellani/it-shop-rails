require_relative "../../lib/authentication/helper_methods.rb"
class ApplicationController < ActionController::API
  include Authentication::HelperMethods
  protected
  def generate_new_jwt_token(user)
    payload= {
      id:user.id,
      access_token:user.access_token
    }
    #TODO Add expiration data
    token = JWT.encode payload, ENV['JWT_PASSWORD'], 'HS256'
  end
end
