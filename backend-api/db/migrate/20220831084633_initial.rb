# frozen_string_literal: true

class Initial < ActiveRecord::Migration[7.0]
  def change
    create_table 'shifts', force: :cascade do |t|
      t.string 'name'
      t.text 'description'
      t.datetime 'startdate'
      t.datetime 'enddate'
      t.integer 'shop_id'
      t.integer 'user_id'
      t.string 'department'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.index ['shop_id'], name: 'index_shifts_on_shop_id'
      t.index ['user_id'], name: 'index_shifts_on_user_id'
    end

    create_table 'shops', force: :cascade do |t|
      t.string 'name'
      t.text 'description'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
    end

#    create_table 'allocations', force: :cascade do |t|
#      t.integer 'shift_id'
#      t.integer 'user_id'
#      t.datetime 'created_at', null: false
#      t.datetime 'updated_at', null: false
#    end

    create_table 'users', force: :cascade do |t|
      t.string 'name'
      t.string 'email'
      t.string 'address'
      t.string 'phone'
      t.string 'photo_url'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.integer 'job_type_id'
      t.index ['job_type_id'], name: 'index_users_on_job_type_id'
      t.integer 'shop_id'
      t.index ['shop_id'], name: 'index_users_on_shop_id'
      t.integer 'access_role_id'
      t.index ['access_role_id'], name: 'index_users_on_access_role_id'
      t.index ['email'], name: 'index_users_on_email', unique: true
    end

    create_table 'access_roles', force: :cascade do |t|
      t.string 'name'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.string 'rid'
    end

    create_table 'job_types', force: :cascade do |t|
      t.string 'name'
      t.string 'light_color'
      t.string 'dark_color'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.string 'code'
    end

    add_foreign_key 'shifts', 'shops'
  end
end
