class Comment < ApplicationRecord
  belongs_to :owner,class_name: 'User'
  belongs_to :product
end
