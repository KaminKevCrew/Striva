# == Schema Information
#
# Table name: workouts
#
#  id           :integer          not null, primary key
#  workout_type :string
#  title        :string
#  description  :text
#  lat          :float
#  lng          :float
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Workout < ApplicationRecord
  validates :title, :workout_type, :description, :lat, :lng, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments
  has_many :likes

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end
