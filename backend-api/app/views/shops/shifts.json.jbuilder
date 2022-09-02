json.shifts @shop_shifts do |shift|
  json.id shift.id
  json.name shift.name
  json.startTime shift.startTime
  json.endTime shift.endTime

  json.users shift.users do |user|
    json.id user.id
    json.name user.name
    json.photo_url user.photo_url
    json.job_type user.job_type.code
  end
end
