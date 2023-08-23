defmodule RecipeBookPhoenixWeb.RecipeView do
  use RecipeBookPhoenixWeb, :view
  alias RecipeBookPhoenixWeb.RecipeView

  def render("index.json", %{recipes: recipes}) do
    %{data: render_many(recipes, RecipeView, "recipe.json")}
  end

  def render("show.json", %{recipe: recipe}) do
    %{data: render_one(recipe, RecipeView, "recipe.json")}
  end

  def render("recipe.json", %{recipe: recipe}) do
    %{
      id: recipe.id,
      title: recipe.title,
      image_url: recipe.image_url,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    }
  end
end
