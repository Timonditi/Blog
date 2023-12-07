Rails.application.routes.draw do
  # resources :comments
  # resources :posts

  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  get "/post", to:"posts#index"
  get "/post/new", to:"posts#new"
  get "/post/:id", to:"posts#show"
  post "/post", to:"posts#create"
  patch "/post/:id", to:"posts#update"
  delete "/post/:id", to:"posts#destroy"

  post "/comment/:id", to:"comments#create"
  delete "/comment/:id", to:"comments#destroy"




end
