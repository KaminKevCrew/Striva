Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :routes
    resources :likes, only: [:index, :create, :show, :destroy]
    resources :follows, only: :index
    resources :comments, only: [:index, :show, :create, :destroy]
    resources :workouts, only: [:index, :show, :create]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
