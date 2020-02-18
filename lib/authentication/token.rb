require "warden"

module Authentication
  class TokenStrategy < Warden::Strategies::Base
    def authenticate!
      #TODO check if the payload is a valid json
      payload = (request.request_method == "POST" && JSON.parse(request.body.read)) ||
                (["GET","DELETE"].include?(request.request_method)  && request.params)
      if payload["token"]
        jwt = JWT.decode(payload["token"], ENV["JWT_PASSWORD"], "HS256").first
        user = User.find_by_id(jwt["id"])
        if user && user.access_token == jwt["access_token"]
          success!(user)
        else
          fail!("Please reauthenticate again")
        end
      else
        fail!("Authentication required !")
      end
    end
  end
end
