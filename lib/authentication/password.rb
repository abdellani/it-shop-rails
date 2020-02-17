require "warden"

module Authentication
  class PasswordStrategy < Warden::Strategies::Base
    def authenticate!
      #TODO check if the payload is a valid json
      payload = JSON.parse(request.body.read)
      if user = User.find_by_email(payload["email"]).try(:authenticate, payload["password"])
        success!(user)
      else
        fail!("Invalid email/password !")
      end
    end
  end
end
