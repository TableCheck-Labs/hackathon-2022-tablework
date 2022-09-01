# frozen_string_literal: true

class AccessRolesController < ApplicationController
  before_action :set_access_role, only: %i[edit update destroy]

  # GET /access_roles
  def index
    @access_roles = AccessRole.all
    render json: @access_roles
  end

  # GET /access_roles/1
  def show
    @access_role = AccessRole.find(params[:id])
    render json: @access_role.to_json(:include => :users)
  end

  # POST /access_roles
  def create
    @access_role = AccessRole.new(access_role_params)
    if @access_role.save
      format.json { render :show, status: :created, location: access_roles_url }
    else
      format.json { render json: @access_role.errors, status: :unprocessable_entity }
    end
  end

  # PATCH/PUT /access_roles/1
  def update
    if @access_role.update(access_role_params)
      format.json { render :show, status: :ok, location: access_roles_url }
    else
      format.json { render json: @access_role.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /access_roles/1
  def destroy
    @access_role.destroy
  end

  private

  def set_access_role
    @access_role = AccessRole.find(params[:id])
  end

  def access_role_params
    params.require(:access_role).permit(:name, :rid, user_ids: [])
  end

end
