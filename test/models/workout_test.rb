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
require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
