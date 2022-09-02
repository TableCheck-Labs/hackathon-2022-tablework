# frozen_string_literal: true

class User < ApplicationRecord
  before_save   :downcase_email
  validates :name, presence: true, length: { maximum: 50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: { maximum: 80 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  belongs_to :access_role, required: false
  #belongs_to :shop, required: false
  belongs_to :job_type, required: false

  has_many :shifts
  has_many :allocations
  has_many :shops, through: :allocations

  def self.all_except(user)
    where.not(id: user)
  end

  def self.search(term, _page)
    if term
      where('name LIKE ?', "%#{term}%").order('id DESC').page(current_page)
    else
      # note: default is all, just sorted
      order('id DESC').page(current_page)
    end
  end

  private

  # Converts email to all lower-case.
  def downcase_email
    self.email = email.downcase
  end

end
