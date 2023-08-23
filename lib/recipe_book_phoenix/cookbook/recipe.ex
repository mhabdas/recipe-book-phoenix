defmodule RecipeBookPhoenix.Cookbook.Recipe do
  use Ecto.Schema
  import Ecto.Changeset

  schema "recipes" do
    field :instructions, {:array, :string}
    field :title, :string
    field :image_url, :string
    field :ingredients, {:array, :string}

    timestamps()
  end

  @doc false
  def changeset(recipe, attrs) do
    recipe
    |> cast(attrs, [:title, :image_url, :ingredients, :instructions])
    |> validate_required([:title, :image_url, :ingredients, :instructions])
  end
end
