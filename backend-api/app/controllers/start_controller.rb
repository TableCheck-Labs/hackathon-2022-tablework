# frozen_string_literal: true

class StartController < ApplicationController

  # GET /start
  def index
    @user = User.new

    @shifts = Shift.paginate(page: params[:page], per_page: 10).order('startdate DESC')
    @completed_shifts = Shift.paginate(page: params[:completed_page], per_page: 10).order('startdate DESC').where('"enddate" < ?', Time.now)
    @upcoming_shifts = Shift.paginate(page: params[:upcoming_page], per_page: 10).order('startdate DESC').where('"enddate" > ?', Time.now)
    render json: @shifts
  end
end
