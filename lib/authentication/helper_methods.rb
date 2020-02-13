module Authentication
  module HelperMethods
    def authenticate!(type = :token)
      request.env["warden"].authenticate! type 
    end
    def current_user
      request.env["warden"].user
    end
  end
end