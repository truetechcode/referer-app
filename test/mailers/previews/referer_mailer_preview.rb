# Preview all emails at http://localhost:3000/rails/mailers/referer_mailer
class RefererMailerPreview < ActionMailer::Preview
  def new_referer_email
    user = User.last
    to =  'test@me.com'#params[:email]

    RefererMailer.with(user: user, to: to).new_referer_email
  end
end
