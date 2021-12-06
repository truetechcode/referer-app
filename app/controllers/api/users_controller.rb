class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[show update destroy]
  before_action :set_user, only: %i[show edit update destroy]

  def show
    render 'users/show.json'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render 'users/create.json' and return
    else
      respond_to do |format|
        format.json { head 401 }
      end
    end
  end

  def update
    if @user.update(user_params)
      render 'users/update.json' and return
    else
      respond_to do |format|
        format.json { head 401 }
      end
    end
  end

  private

  # Use callbacks to share common methods between actions.
  def set_user
    @user = User.find(current_user.id)
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params
      .require(:user)
      .permit(
        :password,
        :password_confirmation,
        # :username,
        # :last_name,
        :email,
        # :referer_email,
      )
  end
end
