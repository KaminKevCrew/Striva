# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  coordinates :text             not null
#  title       :string           not null
#  description :text
#  route_type  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Route < ApplicationRecord
  validates :route_type, 	inclusion: { in: ['Run', 'Ride']}
  belongs_to :user
end
