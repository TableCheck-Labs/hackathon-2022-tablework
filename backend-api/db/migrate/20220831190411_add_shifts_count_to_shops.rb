# frozen_string_literal: true

class AddShiftsCountToShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, :shifts_count, :integer, default: 0
  end
end
