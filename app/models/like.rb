# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, :post_id. presence: true
    validates :post_id, uniqueness: {scope: :liker_id}

    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post


end
