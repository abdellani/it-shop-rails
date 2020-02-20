class Product < ApplicationRecord
  belongs_to :owner, class_name: "User"
  has_many :photos
  has_many :comments
  has_many :visits
end
