class ApplicationController < ActionController::Base
  rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_auth_token
  protect_from_forgery with: :exception, unless: :json_request?
  protect_from_forgery with: :null_session, if: :json_request?
  before_action :set_current_user, if: :json_request?

  def json_request?
    request.format.json? || request.format.xml?
  end
  
  def set_current_user
    @current_user ||= warden.authenticate(scope: :api_user)
  end

  def invalid_auth_token
    respond_to do |format|
      format.json { head 401 }
    end
  end  
end
