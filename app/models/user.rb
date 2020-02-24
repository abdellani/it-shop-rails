class User < ApplicationRecord
  has_secure_token :access_token
  has_secure_password
  has_many :products, foreign_key: "owner_id"
  has_many :comments, foreign_key: "owner_id"
  has_many :orders, foreign_key: "owner_id"
  has_many :notifications
  has_many :unread_notifications, ->{where(read_at: nil)},class_name:"Notification"
  has_many :requests, through: :products, source: :orders
  has_many :clients, through: :requests, source: :owner
end
