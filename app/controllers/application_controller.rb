class ApplicationController < ActionController::Base
  rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_auth_token
  protect_from_forgery with: :exception, unless: :json_request?
  protect_from_forgery with: :null_session, if: :json_request?
  skip_before_action :verify_authenticity_token, if: :json_request?

  def json_request?
    request.format.json? || request.format.xml?
  end
  
  def invalid_auth_token
    respond_to do |format|
      format.json { head 401 }
    end
  end  
end
