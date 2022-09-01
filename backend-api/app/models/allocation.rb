# frozen_string_literal: true

# Many to Many relation
class Allocation < ApplicationRecord
  # Shifts to Users relations
  # Implementing has_many :through association (join model)
  # Shifts has many Users (and vice versa)
  belongs_to :shift, optional: true
  belongs_to :user
end
