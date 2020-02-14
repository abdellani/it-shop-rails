class Api::PhotosController < ActionController::Base
  def show
    @photo=Photo.find_by_id(params[:id])
    if @photo
      render json: { 
        status:200,
        photo:"data:image/png;base64, #{@photo.content}"
      }
    else
      render json: { status:404, message: "Photo not found!"}, status: 404
    end
  end
end
