Rails.application.routes.draw do
  root 'static_pages#index'

  get '/callback', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :patient_info, only: [:index]
    end
  end
end
