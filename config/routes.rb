Rails.application.routes.draw do
  # get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :photos, only: [:show]
    resources :products, only: [:index, :create, :show], module: :products do
      resources :comments, only: [:index, :create]
    end
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :comments, only: [:destroy]
    namespace :loggedin do
      resources :products, only: [:index, :destroy]
    end
  end
  root "pages#index"
  match "*path" => "pages#index", via: [:get]
end
