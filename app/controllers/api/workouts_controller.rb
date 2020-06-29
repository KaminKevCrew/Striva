class Api::WorkoutsController < ApplicationController
  def index 
    #   ids = []
    #   current_user.followers.each do |follow|
    #       ids << follow.id
    #   end
    #   current_user.following.each do |follow|
    #       ids << follow.id
    #   end
    #   ids << current_user.id
      
    #   if params[:page_id]
    #       @workouts = Workout.where(user_id: ids)
    #       .order("workouts.time DESC").page(params[:page_id]).per(5)
    #       @max = @workouts.length
    #   else
    #       @workouts = Workout.where(user_id: current_user.id)
    #   end
    @workouts = Workout.all
  end

  def show 
      @workout = Workout.find(params[:id])
      render :show
  end

  private 
  def workout_params
      params.require(:workout).permit(
          :title, :description, :elevation, :coordinates,
          :time, :distance, :average_speed, :elapse_time)
  end
end
