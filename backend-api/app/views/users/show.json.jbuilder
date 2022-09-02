json.id @user.id
json.name @user.name
json.email @user.email
json.address @user.address
json.photo_url @user.photo_url

json.shops @user.shops do |shop|
  json.id shop.id
  json.name shop.name
  json.photo_url shop.photo_url
  json.shifts shop.shifts do |shift|
    json.id shift.id
    json.name shift.name
    json.startdate shift.startdate
    json.enddate shift.enddate
  end
end
