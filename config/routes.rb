Rails.application.routes.draw do
  namespace :api do
    get 'photos/show'
  end
  namespace :api do
  end
  # get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :products, only:[:index]
    resources :sessions, only: [:create,:destroy]
    resources :users, only: [:create]
  end
  root "pages#index"
  match '*path' => 'pages#index', via: [:get]
end
