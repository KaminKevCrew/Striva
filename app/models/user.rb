# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token)
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    # This makes it so we can validate our password length, without storing it in the DB
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # This allows us to run methods before running validations
  # In this case, we need to have a session_token when a user is first created
  after_initialize :ensure_session_token

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_workouts,
    through: :likes,
    source: :workout

  has_many :workouts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Workout

  has_many :fanships,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followships,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :fanships,
    source: :follower

  has_many :followees,
    through: :followships,
    source: :followee

  # Class method for finding a user ONLY if we have the correct username and password
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    # Set temporary instance variable so that we can validate length
    @password = password
    # Create a password_digest so that we do not have to store the plain-text password in our DB
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    # Use BCrypt's built-in method for checking if the password provided is the user's password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    # Generate the initial session_token so that we pass the validation
    # This method runs right after the model is initialized, before any validations are run
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # When a user logs out, scramble their session_token so that the old one cannot be used
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
