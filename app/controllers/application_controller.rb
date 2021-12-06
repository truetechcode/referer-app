class ApplicationController < ActionController::Base
  rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_auth_token

  def invalid_auth_token
    respond_to do |format|
      format.json { head 401 }
    end
  end  
end
