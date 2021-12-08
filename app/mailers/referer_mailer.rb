class RefererMailer < ApplicationMailer
  def new_referer_email
    @user = params[:user]
    to = params[:to]
    @url  = params[:url]
    mail(to: to, subject: "You got an invite!")
  end
end
