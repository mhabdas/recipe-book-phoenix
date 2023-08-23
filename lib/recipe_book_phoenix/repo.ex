defmodule RecipeBookPhoenix.Repo do
  use Ecto.Repo,
    otp_app: :recipe_book_phoenix,
    adapter: Ecto.Adapters.Postgres
end
