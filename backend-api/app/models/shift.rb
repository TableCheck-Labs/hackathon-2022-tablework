# frozen_string_literal: true

class Shift < ApplicationRecord
  validates :name, presence: true, length: { minimum: 4, maximum: 50 }
  validates :shop_id, presence: true
  validates :startdate, presence: true

  paginates_per 10

  has_many :assignments
  has_many :users, through: :assignments
  
  belongs_to :shop, counter_cache: true

  def created_by
    User.find(author).name if author
  end

  def self.search(term, _page)
    if term
      where('name LIKE ?', "%#{term}%").order('id DESC').page(current_page)
    else
      # note: default is all, just sorted
      order('id DESC').page(current_page)
    end
  end

end
