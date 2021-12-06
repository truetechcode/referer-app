class SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user
  respond_to :json

  # POST /api/login
  def create
    unless request.format == :json
      sign_out
      render status: 406,
             json: { message: 'JSON requests only.' } and return
    end
    # auth_options should have `scope: :api_user`
    resource = warden.authenticate(auth_options)
    if resource.blank?
      render status: 401,
             json: { 
                      status: { success: false, message: 'Error with your login or password'}, 
                      data: nil 
                    } and return
    end

    sign_in(resource_name, resource)

    respond_with resource, location:
      after_sign_in_path_for(resource) do |format|
      if resource.active
        format.json do
          render  status: :ok,
                  json: {
                          status: { success: true, message: 'Logged in sucessfully.' },
                          auth_token: current_token,
                          data: resource.serializable_hash(only: [:email, :first_name, :last_name, :phone, :role, :mda_id, :reg_id])
                        }
        end
      else
        format.json do
          render  status: 403,
                  json: {
                          status: { success: false, message: 'You are not allowed to use the app.' },
                          auth_token: nil,
                          data: nil
                        }
        end        
      end
    end
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end

  def respond_to_on_destroy
    render json: {
      status: 200,
      message: 'logged out successfully'
    }, status: :ok
  end
end
