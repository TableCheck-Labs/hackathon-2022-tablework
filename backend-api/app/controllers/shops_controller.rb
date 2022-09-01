# frozen_string_literal: true

class ShopsController < ApplicationController
  before_action :set_shop, only: %i[show edit update destroy]

  # GET /shops
  def index
    @shops = Shop.all
    render json: @shops
  end

  # GET /shops/1
  def show
    @shop = Shop.find(params[:id])
    render json: @shop.to_json(:include => :shifts)
  end

  # POST /shops
  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render json: { success: 'Shop created' }, status: 200
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shops/1
  def update
    if @shop.update(shop_params)
      format.json { render :index, status: :ok }
    else
      format.json { render json: @shop.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /shops/1
  def destroy
    @shop.destroy
  end

  private

  def set_shop
    @shop = Shop.find(params[:id])
  end

  def shop_params
    params.require(:shop).permit(:name, :description, user_ids: [])
  end

end
