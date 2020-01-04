class API::WorkoutsController < ApplicationController
  def index
    # ids = []
    # current_user.workouts.each do |workout|
    #   ids << workout.id
    # end
  end

  def show
    @activity = Activity.find(params[:id])
    render :show
  end

  private
  def workout_params
    params.require(:workout).permit(
      :title, :description, :elevation, :coordinates, 
      :time, :distance, :average_speed, :elapsed_time
    )
  end
end
