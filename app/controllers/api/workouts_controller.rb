class Api::WorkoutsController < ApplicationController
  def create
    @workout = Workout.new(workout_params)
    p params.inspect
    if @workout.save!
      render :show
    else
      render @workout.errors.full_messages, status: 401
    end
  end
  
  def update
    @workout = selected_workout
    if @workout && @workout.update_attributes(workout_params)
      render :show
    elsif !@workout
      render json: ['Could not locate workout'], status: 400
    else
      render json: @workout.errors.full_messages, status: 401
    end
  end
  
  def show
    @workout = selected_workout
  end
  
  def index
    @workouts = Workout.all
  end
  
  def destroy
    @workout = selected_workout
    if @workout
      @workout.destroy
      render :show
    else
      render ['Could not find workout']
    end
  end
  
  private
  
  def selected_workout
    Workout.find(params[:id])
  end
  
  def workout_params
    params.require(:workout).permit(:athlete_id, :title, :description, :elapsed_time, :coordinates, :distance, :average_speed, :start_time, :end_time)
  end
end
