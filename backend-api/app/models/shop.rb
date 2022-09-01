# frozen_string_literal: true

class Shop < ApplicationRecord
  validates :name, presence: true

  paginates_per 20

  has_many :shifts
  has_many :users

  # get how many shifts were scheduled
  def scheduled
    Shift.where("shop_id = '#{id}'").count
  end
end
