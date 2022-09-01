# frozen_string_literal: true

class Shop < ApplicationRecord
  validates :name, presence: true

  paginates_per 20

  has_many :shifts
  has_many :users
end
