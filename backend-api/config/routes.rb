# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  resources :shifts
  resources :shops
  resources :users
  resources :access_roles
  resources :job_types

  get 'shops/:id/staff' =>'shops#staff'
  get 'shops/:id/shifts' =>'shops#shifts'

  get 'start' => 'start#index'

  root 'start#index'
end
