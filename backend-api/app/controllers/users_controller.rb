# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    @user_shifts = Shift.all.where(:user_id => @user.id)
    @user_shops = @user.shops
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { success: 'User created' }, status: 201
    else
      render json: @user.errors, status: 422
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # PATCH/PUT /users/1
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :address, :phone, :photo_url, :job_type_id, :shop_id, :access_role_id, shift_ids: [])
    end
end
