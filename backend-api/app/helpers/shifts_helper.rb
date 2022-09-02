# frozen_string_literal: true

module ShiftsHelper
  def upcoming_shifts
    Shift.order('startTime DESC').where('"endTime" > ?', Time.now)
  end

  def completed_shifts
    Shift.order('startTime DESC').where('"endTime" < ?', Time.now)
  end
end
