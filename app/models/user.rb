class User < ApplicationRecord
  has_secure_token :access_token
  has_secure_password
  has_many :products,foreign_key: "owner_id"
end
