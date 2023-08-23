defmodule RecipeBookPhoenix.CookbookFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `RecipeBookPhoenix.Cookbook` context.
  """

  @doc """
  Generate a recipe.
  """
  def recipe_fixture(attrs \\ %{}) do
    {:ok, recipe} =
      attrs
      |> Enum.into(%{
        instructions: [],
        title: "some title",
        image_url: "some image_url",
        ingredients: []
      })
      |> RecipeBookPhoenix.Cookbook.create_recipe()

    recipe
  end
end
