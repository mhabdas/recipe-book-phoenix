defmodule RecipeBookPhoenixWeb.PageController do
  use RecipeBookPhoenixWeb, :controller
  alias RecipeBookPhoenix.Cookbook

  def index(conn, _params) do
    recipes = Cookbook.list_recipes()
    render(conn, "index.html", props: Poison.encode!(%{recipes: recipes}))
  end
end
