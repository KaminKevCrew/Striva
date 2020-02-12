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

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
