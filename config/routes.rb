Rails.application.routes.draw do
  root "home#index"
  get 'login', to: 'home#index'
  post 'register', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
