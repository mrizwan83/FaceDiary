Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :destroy, :show, :index, :update]
    resources :posts, only: [:create, :update, :destroy, :index, :show]
    resources :friends, only: [:create, :destroy, :update, :index]
    resources :likes, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end
end
