defmodule Widelix.Router do
  use Phoenix.Router

  scope "/" do
    # Use the default browser stack.
    pipe_through :browser

    get "/", Widelix.PageController, :index, as: :pages
    resources "/users", Widelix.UserController
  end

  scope path: "/admin", alias: YourApp.Admin, helper: "admin" do
    resources "/users", UserController
  end
  
  # Other scopes may use custom stacks.
  # scope "/api" do
  #   pipe_through :api
  # end
end
