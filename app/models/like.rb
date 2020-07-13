# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  workout_id :integer          not null
#
class Like < ApplicationRecord

  belongs_to :workout,
    primary_key: :id,
    foreign_key: :workout_id,
    class_name: :Workout
    # optional: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    # optional: true
    
end
