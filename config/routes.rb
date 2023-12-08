Rails.application.routes.draw do
  resources :posts
  resources :users
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

  post "/login", to:"session#login"
  delete "/logout", to:"session#logout"
  get "/current_user", to:"users#loggedin_user"
  get "/user", to:"users#index"
  get "/user/new", to:"users#new"
  get "/user/:id", to:"users#show"
  post "/user", to:"users#create"
  patch "/user/:id", to:"users#update"
  delete "/user/:id", to:"users#destroy"




end
