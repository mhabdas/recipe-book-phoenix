# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     RecipeBookPhoenix.Repo.insert!(%RecipeBookPhoenix.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias RecipeBookPhoenix.Repo
alias RecipeBookPhoenix.Cookbook.Recipe

Repo.insert!(%Recipe{
  id: 1,
  title: "Pancakes",
  ingredients: ["1 cup flour", "1 cup milk", "1 egg"],
  instructions: ["Mix ingredients", "Cook on griddle"],
  image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Banana_on_pancake.jpg"
})

Repo.insert!(%Recipe{
  id: 2,
  title: "French Toast",
  ingredients: ["1 egg", "1 slice bread", "1/4 cup milk"],
  instructions: ["Mix ingredients", "Cook on griddle"],
  image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/00_French_Toast.jpg"
})
