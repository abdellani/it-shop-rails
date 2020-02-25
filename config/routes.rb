Rails.application.routes.draw do
  # get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :photos, only: [:show]
    resources :products, only: [:index, :create, :show] do
      scope module: :products do
        resources :comments, only: [:index, :create]
        resources :visits, only: [:index]
      end
    end
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :comments, only: [:destroy]
    namespace :loggedin do
      resources :products, only: [:index, :update, :destroy]
      resources :comments, only: [:update]
      get "notifications/count", to: "notifications#count"
      resources :notifications, only: [:index]
      resources :orders, only: [:index, :create]
      get "requests", to: "orders#requests_index"
    end
  end
  root "pages#index"
  match "*path" => "pages#index", via: [:get]
end
