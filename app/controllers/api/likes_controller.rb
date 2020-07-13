class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.workout_id = params[:id]
    if @like.save
      @workout = @like.workout
      render 'api/workouts/show'
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, workout_id: params[:id])
    @like.destroy
    @workout = @like.workout
    render 'api/workouts/show'
  end
end
