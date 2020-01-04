Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show, :index] do
      resources :routes
    end

    resource :session, only: [:create, :destroy, :show]

    resources :workouts do
      resources :comments, only: [:index]
      resources :likes, only: [:index]
    end

    resources :likes, only: [:create, :show, :destroy]

    resources :comments, only: [:create, :show, :destroy]


    resources :profiles, only: [:show] do 
      resources :activities, only: [:index]
    end
  end

  root "static_pages#root"
end
