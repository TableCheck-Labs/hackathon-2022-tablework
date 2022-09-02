# frozen_string_literal: true

# Many to Many relation
class Allocation < ApplicationRecord
  # Shops to Users relations
  # Implementing has_many :through association (join model)
  # Shops has many Users (and vice versa)
  belongs_to :shop, optional: true
  belongs_to :user
end
