class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user_follow = User.find_by(username: "kaminkevcrew")

    if @user.save
      Follow.create!(user_id: @user.id, follower_id: @user_follow.id)
      Follow.create!(user_id: @user_follow.id, follower_id: @user.id)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
      @user = User.find(params[:id])
      render :show
  end

  def index
    @users = Users.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :country, :city, :state, :sex)
  end
end
