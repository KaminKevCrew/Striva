class Api::LikesController < ApplicationController
  def index
      @likes = Like.where(workout_id: params[:workout_id])
  end

  def create
      @like = Like.new(like_params)
      @liked = Like.find_by(workout_id: like_params[:workout_id], user_id: current_user.id)
      if @liked
          id = @liked.id.dup()
          @liked.destroy()
          render json: [id]
      elsif @like.save
          render :show
      end
  end

  def show
      @like = Like.find(params[:id])
  end

  def destroy
      @like = Like.find(params[:id])
      if @like.user_id === current_user.id
          @like.destroy()
      else
          render json: ["cannot remove someone elses like"], status: 401
      end

  end

  private
  def like_params
        params.require(:like).permit(:user_id, :workout_id)
  end
end
