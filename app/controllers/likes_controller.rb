class LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.workout_id = params[:id]
    unless @like.save
      flash[:errors] = @like.errors.full_messages
    end
    redirect_to workout_url(params[:id])
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    redirect_to workout_url(@like.workout_id)
  end
end
