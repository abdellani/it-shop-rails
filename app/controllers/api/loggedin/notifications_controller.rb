class Api::Loggedin::NotificationsController < ApplicationController
  def count
    authenticate!
    #New notifications count
    render json: {
             status: 200,
             count: current_user.unread_notifications.count,
           },
           status: 200
  end

  def index
    authenticate!
    current_user.unread_notifications.update(read_at: Time.now)
    render json: {
             status: 200,
             notifications: current_user.notifications.as_json(only: [:content]),
           },
           status: 200
  end
end
