Rails.application.routes.draw do
  # resources :messages
  # root "root#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'messages#index'
  get 'message', to: 'messages#random'
end
