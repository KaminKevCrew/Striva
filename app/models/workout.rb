# == Schema Information
#
# Table name: workouts
#
#  id            :bigint           not null, primary key
#  average_speed :float
#  coordinates   :string
#  description   :text             not null
#  distance      :float
#  elapsed_time  :float
#  end_time      :datetime
#  start_time    :datetime
#  title         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  athlete_id    :integer          not null
#
# Indexes
#
#  index_workouts_on_athlete_id  (athlete_id)
#  index_workouts_on_title       (title)
#
class Workout < ApplicationRecord
  validates :description, :title, presence: true

  has_many :likes,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :user

  belongs_to :athlete,
    primary_key: :id,
    foreign_key: :athlete_id,
    class_name: :User
end
