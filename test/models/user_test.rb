# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gender          :string           not null
#  birthday        :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string           not null
#  lastname        :string           not null
#  bio             :text
#  city            :string
#  work            :string
#  school          :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
