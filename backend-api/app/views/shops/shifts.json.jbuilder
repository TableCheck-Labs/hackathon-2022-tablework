json.shifts @shop_shifts do |shift|
  json.id shift.id
  json.name shift.name
  json.startdate shift.startdate
  json.enddate shift.enddate

  json.users do
    json.id User.find(shift.user_id).id
    json.name User.find(shift.user_id).name
    json.photo_url User.find(shift.user_id).photo_url
    json.job_type User.find(shift.user_id).job_type.code
  end
end


