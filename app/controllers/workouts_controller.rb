class WorkoutsController < ApplicationController
  def new
    @workout = Workout.new
    render :new
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.athlete_id = current_user.id
    if @workout.save
      redirect_to workout_url(@workout)
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.find(params[:id])
    if @workout
      render :show
    else
      render json: @workout.errors.full_messages, status: 404
    end
  end

  def index
    @workouts = if params[:user_id]
      Workout.where(athlete_id: params[:user_id])
    else
      Workout.all
    end
    render :index
  end

  def edit
    @workout = Workout.find(params[:id])
    render :edit
  end

  def update
    @workout = Workout.find(params[:id])
    if @workout.update(workout_params)
      redirect_to workout_url(@workout)
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    if @workout.destroy
      redirect_to workouts_url
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def workout_params
    params.require(:workout).permit(:athlete_id, :title, :description, :elapsed_time, :coordinates, :distance, :average_speed, :start_time, :end_time)
  end
end
