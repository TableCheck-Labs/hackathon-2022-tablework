# frozen_string_literal: true

class ShiftsController < ApplicationController
  before_action :set_shift, only: %i[show edit update destroy]

  # GET /shifts
  def index
    @shifts = Shift.all
    render json: @shifts
  end

  # GET /shifts/1
  def show
    @shift = Shift.find(params[:id])
    render json: @shift
  end

  # POST /shifts
  def create
    @shift = Shift.new(shift_params)

    if @shift.save
      render json: @shift, status: :created, location: @shift
    else
      render json: @shift.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shifts/1
  def update
    if @shift.update(shift_params)
      format.json { render :show, status: :ok, location: @shift }
    else
      format.json { render json: @shift.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /shifts/1
  def destroy
    @shift.destroy
  end

  private

  def set_shift
    @shift = Shift.find(params[:id])
  end

  def shift_params
    params.require(:shift).permit(:name, :description, :shop_id, :department, :color, :startdate, :enddate, :user_id)
  end
end
