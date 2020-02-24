class Order < ApplicationRecord
  belongs_to :product
  belongs_to :owner, class_name: 'User'
  delegate :owner, to: :product, prefix: :product
end
