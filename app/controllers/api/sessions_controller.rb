class Api::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user
  before_action :prevent_session_store
  respond_to :json

  # POST /api/login
  def create
    unless request.format == :json
      sign_out
      logger.info 'JSON requests only.'
      render status: 406,
             json: { message: 'JSON requests only.' } and return
    end
    # auth_options should have `scope: :api_user`
    resource = warden.authenticate(auth_options)
    if resource.blank?
      logger.info 'Error with your login or password.'
      render status: 401,
             json: { success: false, message: 'Error with your login or password' } and return
    end

    sign_in(resource_name, resource)

    
    respond_with resource, location:
    after_sign_in_path_for(resource) do |format|
      logger.info 'Token generated and signed in successfully'
      format.json do
        render json:
                    {
                      status: { code: 200, message: 'Logged in sucessfully.' },
                      auth_token: current_token,
                      data: resource.serializable_hash(only: [:mobile_number])
                    }, status: :ok
      end
    end
  end

private
  def current_token
    request.env['warden-jwt_auth.token']
  end

  def prevent_session_store
    request.session_options[:skip] = true
  end

  def respond_to_on_destroy
    render json: {
      status: 200,
      message: 'logged out successfully'
    }, status: :ok
  end  
end