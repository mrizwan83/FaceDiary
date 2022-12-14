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
class User < ApplicationRecord
    validates :session_token, :password_digest, :firstname, :lastname, :email, :birthday, :gender, presence: true 
    validates :email, :session_token, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :sent_requests,
        foreign_key: :requester_id,
        class_name: :Friend

    has_many :received_requests,
        foreign_key: :requestee_id,
        class_name: :Friend

    has_many :likes,
    foreign_key: :liker_id,
    class_name: :Like

    has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
