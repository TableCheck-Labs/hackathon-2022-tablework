# frozen_string_literal: true
namespace :database do
  desc 'Initialize database and populate'
  task reset: :environment do
    Rake::Task["db:drop"].invoke
    Rake::Task["db:create"].invoke
    Rake::Task["db:migrate"].invoke
    Rake::Task["populate:access_roles"].invoke
    Rake::Task["populate:job_types"].invoke
    Rake::Task["populate:seed_superuser"].invoke
    Rake::Task["populate:seed_user"].invoke
    Rake::Task["populate:seed_shop"].invoke
    Rake::Task["populate:seed_shifts"].invoke
  end
end


namespace :populate do
  desc 'Setup first user as superuser'
  task seed_superuser: :environment do
    User.create!([{ id: 1,
                    name: 'Tablework Superuser',
                    email: 'super@tablework.com',
                    access_role_id: AccessRole.find_by_rid('superuser').id }])
  end

  desc 'Setup default users'
  task seed_user: :environment do
    User.create!([{ id: 2,
                    name: 'Pablo Diaz',
                    email: 'ispablo.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=a042581f4e',
                    address: 'North-South ave -982',
                    shop_id: 1,
                    phone: '0123-0102031',
                    job_type_id: JobType.find_by_code('waiter').id,
                    access_role_id: AccessRole.find_by_rid('staff').id },
                    { id: 3,
                    name: 'Kitahara Hikaru',
                    email: 'hikaru.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=hikaru.realperson@epl.com',
                    address: 'North-South ave -182',
                    shop_id: 2,
                    phone: '0723-0102031',
                    job_type_id: JobType.find_by_code('bartender').id,
                    access_role_id: AccessRole.find_by_rid('staff').id },
                    { id: 4,
                    name: 'James Kojima',
                    email: 'jako.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=jako.realperson@ee.com',
                    address: 'North-South ave -882',
                    shop_id: 1,
                    phone: '0000-0102031',
                    job_type_id: JobType.find_by_code('manager').id,
                    access_role_id: AccessRole.find_by_rid('manager').id },
                    { id: 5,
                    name: 'Alex Junior',
                    email: 'alexj.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=alexj.realperson@ele.com',
                    address: 'North-North ave -882',
                    shop_id: 3,
                    phone: '0000-000001',
                    job_type_id: JobType.find_by_code('sommelier').id,
                    access_role_id: AccessRole.find_by_rid('staff').id },
                    { id: 6,
                    name: 'Alex Middle Man',
                    email: 'alexmm.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=alexmm.realperson@example.com',
                    address: 'North-North ave -082',
                    shop_id: 3,
                    phone: '0000-000002',
                    job_type_id: JobType.find_by_code('bartender').id,
                    access_role_id: AccessRole.find_by_rid('staff').id },
                    { id: 7,
                    name: 'Alex Major',
                    email: 'alexmajika.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=alexmajika.realperson@example.com',
                    address: 'North-North ave -000',
                    shop_id: 3,
                    phone: '0000-000003',
                    job_type_id: JobType.find_by_code('supervisor').id,
                    access_role_id: AccessRole.find_by_rid('staff').id },
                    { id: 8,
                    name: 'Alex The Boss',
                    email: 'bigboss.realperson@example.com',
                    photo_url: 'https://i.pravatar.cc/80?u=bigboss.realperson@examle.com',
                    address: 'No-North ave +000',
                    shop_id: 3,
                    phone: '0000-000777',
                    job_type_id: JobType.find_by_code('manager').id,
                    access_role_id: AccessRole.find_by_rid('manager').id },
                  ])
  end

  desc 'Setup access roles'
  task access_roles: :environment do
    AccessRole.create!([{ name: 'Superuser', rid: 'superuser', id: 1},
                        {  name: 'Manager',   rid: 'manager', id: 2 },
                        {  name: 'Staff',  rid: 'staff', id: 3 }])
  end

  desc 'Setup job types'
  task job_types: :environment do
    JobType.create!([{ name: 'Manager', code: 'manager', id: 1},
                     { name: 'Supervisor', code: 'supervisor', id: 2 },
                     { name: 'Executive Chef', code: 'executive_chef', id: 3 },
                     { name: 'Kitchen Manager', code: 'kitchen_manager', id: 4 },
                     { name: 'Sous Chef', code: 'sous_chef', id: 5 },
                     { name: 'Station Chef', code: 'station_chef', id: 6 },
                     { name: 'Asst Chef', code: 'asst_chef', id: 7 },
                     { name: 'Dishwasher', code: 'dishwasher', id: 8 },
                     { name: 'Head Waiter', code: 'head_waiter', id: 9 },
                     { name: 'Waiter', code: 'waiter', id: 10 },
                     { name: 'Sommelier', code: 'sommelier', id: 11 },
                     { name: 'Receiptionist', code: 'receiptionist', id: 12 },
                     { name: 'Cashier', code: 'cashier', id: 13 },
                     { name: 'Bartender', code: 'bartender', id: 14 },
                     { name: 'Janitor', code: 'janitor', id: 15 }
                    ])
  end

  desc 'Setup default shop'
  task seed_shop: :environment do
    Shop.create!([{ id: 1,
                    name: 'Plastic Noodles',
                    description: 'Popular local restaraunt serving tender and chewy noodles' },
                  { id: 2,
                    name: 'Crunchy Crabs',
                    description: 'Best seafood from Hokkaido' },
                  { id: 3,
                    name: "Tea Sea \"We Free\"",
                    description: 'Drinks from Okinawa"' },
                  ])
  end

  desc 'Setup default shifts'
  task seed_shifts: :environment do
    Shift.create!([{ id: 1,
                    name: 'Morning Shift',
                    description: 'Quick morning shift for the upcoming event',
                    department: 'General',
                    startdate: '2022-09-01T08:00:00.000+09:00',
                    enddate: '2022-09-01T12:30:00.000+09:00',
                    shop_id: 1,
                    user_id: 2 },
                  { id: 2,
                    name: 'Evening Shift',
                    description: 'Backup shift',
                    department: 'General',
                    startdate: '2022-09-02T13:00:00.000+09:00',
                    enddate: '2022-09-02T16:00:00.000+09:00',
                    shop_id: 1,
                    user_id: 3 },
                  { id: 3,
                    name: 'Morning Shift',
                    description: 'Red and white, sometimes blurry',
                    department: 'Bar',
                    startdate: '2022-09-02T07:30:00.000+09:00',
                    enddate: '2022-09-02T10:30:00.000+09:00',
                    shop_id: 3,
                    user_id: 5 },
                  { id: 4,
                    name: 'Evening Shift',
                    description: 'Light or Dark, no water',
                    department: 'Bar',
                    startdate: '2022-09-02T11:00:00.000+09:00',
                    enddate: '2022-09-02T16:00:00.000+09:00',
                    shop_id: 3,
                    user_id: 6 },
                  { id: 5,
                    name: 'Night Shift',
                    description: 'Showing off the skill',
                    department: 'Bar',
                    startdate: '2022-09-02T17:00:00.000+09:00',
                    enddate: '2022-09-02T23:55:00.000+09:00',
                    shop_id: 3,
                    user_id: 7 },
                  ])
  end
end
