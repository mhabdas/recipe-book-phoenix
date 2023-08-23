defmodule RecipeBookPhoenixWeb.PageController do
  use RecipeBookPhoenixWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
