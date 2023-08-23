defmodule RecipeBookPhoenix.Repo.Migrations.CreateRecipes do
  use Ecto.Migration

  def change do
    create table(:recipes) do
      add :title, :string
      add :image_url, :string
      add :ingredients, {:array, :string}
      add :instructions, {:array, :string}

      timestamps()
    end
  end
end
