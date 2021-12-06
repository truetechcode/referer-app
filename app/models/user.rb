class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
  
  before_create :add_jti



  def add_jti
    self.jti ||= SecureRandom.uuid
  end
  def generate_jwt
    JWT.encode({ id: id,
                exp: 5.days.from_now.to_i },
                Rails.env.devise.jwt.secret_key)
  end        
end
