# frozen_string_literal: true

class JobTypesController < ApplicationController
  before_action :set_job_type, only: %i[edit update destroy]

  # GET /job_types
  def index
    @job_types = JobType.all
    render json: @job_types
  end

  # GET /job_types/1
  def show
    @job_type = JobType.find(params[:id])
    render json: @job_type
  end

  # POST /job_types
  def create
    @job_type = JobType.new(job_type_params)
    if @job_type.save
      render json: { success: 'Job type created' }, status: 200
    else
      render json: @job_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /job_types/1
  def update
    @job_type = JobType.find(params[:id])
    if @job_type.update_attributes(job_type_params)
      render json: @job_type
    else
      render json: @job_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /job_types/1
  def destroy
    @job_type.destroy
  end

  private

  def set_job_type
    @job_type = JobType.find(params[:id])
  end

  def job_type_params
    params.require(:job_type).permit(:name, :light_color, :dark_color, :code, user_ids: [])
  end

end
