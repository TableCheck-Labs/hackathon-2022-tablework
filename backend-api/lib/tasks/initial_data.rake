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

  desc 'Setup default user'
  task seed_user: :environment do
    User.create!([{ id: 2,
                    name: 'Pablo Diaz',
                    email: 'ispablo.realperson@example.com',
                    department: 'Servitors',
                    shop_id: 1,
                    phone: '0123-0102031',
                    job_type_id: JobType.find_by_code('server').id,
                    access_role_id: AccessRole.find_by_rid('staff').id }])
  end

  desc 'Setup access roles'
  task access_roles: :environment do
    AccessRole.create!([{ name: 'Superuser', rid: 'superuser', id: 1},
                        {  name: 'Manager',   rid: 'manager', id: 2 },
                        {  name: 'Staff',  rid: 'staff', id: 3 }])
  end

  desc 'Setup job types'
  task job_types: :environment do
    JobType.create!([{ name: 'Server', code: 'server', id: 1},
                     { name: 'Dishwasher', code: 'dishwasher', id: 2 },
                     { name: 'Chief Chef', code: 'chief_chef', id: 3 },
                     { name: 'Chef', code: 'chef', id: 4 },
                     { name: 'Bartender', code: 'bartender', id: 5 },
                     { name: 'Waiter', code: 'waiter', id: 6 },
                     { name: 'Cashier', code: 'cashier', id: 7 },
                     { name: 'Janitor', code: 'janitor', id: 8 },
                     { name: 'Manager', code: 'manager', id: 9 }
                    ])
  end

  desc 'Setup default shop'
  task seed_shop: :environment do
    Shop.create!([{ id: 1,
                    name: 'Plastic Noodles',
                    description: 'Popular local restaraunt serving tender and chewy noodles' }])
  end
end
