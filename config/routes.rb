Rails.application.routes.draw do
  get 'home', to: 'hello_world#index'
  root "hello_world#index"

    # API namespace, for JSON requests at /api/sign_[in|out]
    namespace :api, defaults: { format: :json } do
      resources :users, only: %w[show]
  
      devise_for :users,
        skip: %i[registrations invitations
                passwords confirmations
                unlocks],
        path: '',
        path_names: { sign_in: 'api/login',
                      sign_out: 'api/logout' ,
                      registration: 'api/signup'
                    },
                    controllers: {
                      sessions: 'sessions',
                      registrations: 'registrations'
                    }                                      
    end
end
