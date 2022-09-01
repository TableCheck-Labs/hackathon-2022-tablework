# frozen_string_literal: true

class JobType < ApplicationRecord
  validates :name, presence: true

  has_many :users
end
