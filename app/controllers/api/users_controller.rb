class Api::UsersController < ApplicationController
  def create
    return if check_password_confiramtion
    user = User.new(user_params)

    if user && user.save
      token = generate_new_jwt_token(user)
      render json: {
        status: 200,
        id: user.id,
        token: token,
        message: "Welcome !",
      }
    else
      render json: { status: 422, message: user.errors.messages }, status: 422
    end
  end

  def show
    user = User.find_by_id(params[:id])
    render json: user.as_json(
      only: [:name, :id],
      include: [
        products: {
          only: [:id, :name, :description, :category, :price],
          include: [photos: { only: [:id] }],

        },
      ],
    )
  end

  private

  def check_password_confiramtion
    render json: { status: 400, error: "Password confirmation is required!" }, status: 400 if params[:user][:password_confirmation].nil?
  end

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end
