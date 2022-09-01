# frozen_string_literal: true

module ShiftsHelper
  def upcoming_shifts
    Shift.order('startdate DESC').where('"enddate" > ?', Time.now)
  end

  def completed_shifts
    Shift.order('startdate DESC').where('"enddate" < ?', Time.now)
  end
end
