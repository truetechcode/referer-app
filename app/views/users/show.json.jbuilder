json.ignore_nil!

json.user do
  json.id @user.id
  json.name @user.name
  json.username @user.username
  json.referer @user.referer_id
  json.email_address @user.email
end

