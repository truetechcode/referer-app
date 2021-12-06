json.ignore_nil!

json.agent do
  json.id @user.id
  # json.full_name @user.full_name
  json.email_address @user.email
end

