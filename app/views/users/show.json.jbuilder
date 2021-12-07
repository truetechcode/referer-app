json.ignore_nil!

json.user do
  json.id @user.id
  # json.full_name @user.full_name
  json.email_address @user.email
end

