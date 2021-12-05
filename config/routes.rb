Rails.application.routes.draw do
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  root "hello_world#index"
  get 'login', to: 'hello_world#index'
  post 'register', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
