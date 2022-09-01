# frozen_string_literal: true

class AccessRole < ApplicationRecord
  validates :name, presence: true

  has_many :users
end
