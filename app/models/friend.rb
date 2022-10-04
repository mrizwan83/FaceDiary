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
class Friend < ApplicationRecord
    validates :requester_id, :requestee_id, presence: true
    validates :requester_id, uniqueness: {scope: :requestee_id}
    validates :requestee_id, uniqueness: {scope: :requester_id}

    belongs_to :requester,
    foreign_key: :requester_id,
    class_name: :User

    belongs_to :requestee,
    foreign_key: :requestee_id,
    class_name: :User
end
