defmodule Widelix.UserController do
  use Phoenix.Controller

  alias Poison, as: JSON
  
  plug :action
  
  def index(conn, _params) do
    json conn, JSON.encode!("Repo.all(User)")
  end

  def show(conn, %{"id" => id}) do
      text conn, "Showing user #{id}"
  end

  def edit(conn, %{"id" => id}) do
      text conn, "Edit user #{id}"
  end

  def index(conn, _params) do
      json conn, JSON.encode!("viewall")
  end

  def create(conn, _params) do
  name = Dict.get _params , "email"
  IO.puts "Val de conn is #{inspect conn}"
  IO.puts "\nuser name is #{name}"
      json conn, JSON.encode!(%{status: "ok", name: name})
  end

  def update(conn, _params) do
  IO.puts "UPDATEvVal de conn is #{inspect conn}"
  IO.puts "\nUPDATEVal de params is #{inspect _params}"
    conn |>  put_resp_content_type("application/json")
         |>  json  JSON.encode!("PUT UPDATE DONE")
         # json conn, JSON.encode!("PUT UPDATE")
  end


 
end
