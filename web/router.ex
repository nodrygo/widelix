defmodule Widelix.Router do
  use Phoenix.Router

  scope "/" do
    # Use the default browser stack.
    pipe_through :browser
    get "/", Widelix.PageController, :index, as: :pages
  end

  scope path: "/api", alias: Widelix, helper: "api" do
    resources "users", UserController
    resources "files", FilesController
  end 

  # scope path: "/admin", alias: Widelix.Admin, helper: "admin" do
  #   resources "/users", UserController
  # end
  
end
