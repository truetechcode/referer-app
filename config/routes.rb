Rails.application.routes.draw do
  root "hello_world#index"

  get '/', to: 'hello_world#index'
  get 'login', to: 'hello_world#index'
  get 'register', to: 'hello_world#index'

    # API namespace, for JSON requests at /api/sign_[in|out]
    namespace :api, defaults: { format: :json } do
      resources :users, only: %w[show create]
      get 'user', to: 'users#show'
      get 'user/refer', to: 'users#refer'
  
      devise_for :users,
        skip: %i[registrations invitations
                passwords confirmations
                unlocks],
        path: '',
        path_names: { sign_in: 'login',
                      sign_out: 'logout' 
                    },
                    controllers: {
                      sessions: 'api/sessions',
                      registrations: 'registrations'
                    }                                      
    end
end
