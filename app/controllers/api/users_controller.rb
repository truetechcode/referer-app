class Api::UsersController < ApplicationController
  before_action :authenticate_api_user!, only: %i[show update destroy]
  before_action :set_user, only: %i[show edit update destroy]

  def show
    render 'users/show.json'
  end

  def create
    referer = User.find_by(email: user_params["referer_email"])
    referer_id = nil

    if(referer)
      referer_id = referer.id
    end

    @user = User.new(user_params.reject { |k| !User.attribute_method?(k) })
    @user.referer_id = referer_id if referer
    
    if @user.save!
      render 'users/create.json' and return
    else
      respond_to do |format|
        format.json { head 403 }
      end
    end
  end

  private

  # Use callbacks to share common methods between actions.
  def set_user
    p @current_user
    @user = User.find(@current_user.id)
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params
      .require(:user)
      .permit(
        :password,
        :password_confirmation,
        :username,
        :name,
        :email,
        :referer_email,
      )
  end
end
