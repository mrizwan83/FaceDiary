# == Schema Information
#
# Table name: friends
#
#  id               :bigint           not null, primary key
#  requester_id     :integer          not null
#  requestee_id     :integer          not null
#  accepted_request :boolean          default(FALSE)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
