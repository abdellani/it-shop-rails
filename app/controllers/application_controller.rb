require_relative "../../lib/authentication/helper_methods.rb"
class ApplicationController < ActionController::API
  include Authentication::HelperMethods
end
