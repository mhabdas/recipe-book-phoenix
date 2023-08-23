defmodule RecipeBookPhoenix.CookbookTest do
  use RecipeBookPhoenix.DataCase

  alias RecipeBookPhoenix.Cookbook

  describe "recipes" do
    alias RecipeBookPhoenix.Cookbook.Recipe

    import RecipeBookPhoenix.CookbookFixtures

    @invalid_attrs %{instructions: nil, title: nil, image_url: nil, ingredients: nil}

    test "list_recipes/0 returns all recipes" do
      recipe = recipe_fixture()
      assert Cookbook.list_recipes() == [recipe]
    end

    test "get_recipe!/1 returns the recipe with given id" do
      recipe = recipe_fixture()
      assert Cookbook.get_recipe!(recipe.id) == recipe
    end

    test "create_recipe/1 with valid data creates a recipe" do
      valid_attrs = %{instructions: [], title: "some title", image_url: "some image_url", ingredients: []}

      assert {:ok, %Recipe{} = recipe} = Cookbook.create_recipe(valid_attrs)
      assert recipe.instructions == []
      assert recipe.title == "some title"
      assert recipe.image_url == "some image_url"
      assert recipe.ingredients == []
    end

    test "create_recipe/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Cookbook.create_recipe(@invalid_attrs)
    end

    test "update_recipe/2 with valid data updates the recipe" do
      recipe = recipe_fixture()
      update_attrs = %{instructions: [], title: "some updated title", image_url: "some updated image_url", ingredients: []}

      assert {:ok, %Recipe{} = recipe} = Cookbook.update_recipe(recipe, update_attrs)
      assert recipe.instructions == []
      assert recipe.title == "some updated title"
      assert recipe.image_url == "some updated image_url"
      assert recipe.ingredients == []
    end

    test "update_recipe/2 with invalid data returns error changeset" do
      recipe = recipe_fixture()
      assert {:error, %Ecto.Changeset{}} = Cookbook.update_recipe(recipe, @invalid_attrs)
      assert recipe == Cookbook.get_recipe!(recipe.id)
    end

    test "delete_recipe/1 deletes the recipe" do
      recipe = recipe_fixture()
      assert {:ok, %Recipe{}} = Cookbook.delete_recipe(recipe)
      assert_raise Ecto.NoResultsError, fn -> Cookbook.get_recipe!(recipe.id) end
    end

    test "change_recipe/1 returns a recipe changeset" do
      recipe = recipe_fixture()
      assert %Ecto.Changeset{} = Cookbook.change_recipe(recipe)
    end
  end
end
