# frozen_string_literal: true

Rails.application.routes.draw do

  resources :shifts
  resources :shops
  resources :users
  resources :access_roles
  resources :job_types

  get 'users/new'

  get 'start' => 'start#index'

  root 'start#index'
end
