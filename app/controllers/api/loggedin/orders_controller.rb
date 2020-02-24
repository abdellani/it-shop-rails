class Api::Loggedin::OrdersController < ApplicationController
  def index
    authenticate!
    render json: { status: 200,
                  orders: current_user.orders.as_json(
             only: [:quantity],
             include: [
               product: { only: [:id, :name, :price, :category] },
               product_owner: { only: [:name, :id] },
             ],
           ) }
  end

  def requests_index
    authenticate!
    render json: {
             status: 200,
             requests: current_user.requests.as_json({
               only: [:quantity],
               include: [
                 product: {
                   only: [:id, :name, :price, :category],
                 },
                 owner: {
                   only: [:id, :name],
                 },
               ],
             }),
           }, status: 200
  end

  def create
    authenticate!
    product = Product.find_by_id(params[:product_id])
    order = current_user.orders.new(quantity: params[:quantity], product: product)
    if order.save
      #ADD notification to product' owner
      render json: { status: 200, message: "Order created successfully !" }, status: 200
    else
      render json: { status: 422, message: "error" }, status: 422
    end
  end
end
