import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :recipe_book_phoenix, RecipeBookPhoenix.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "recipe_book_phoenix_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :recipe_book_phoenix, RecipeBookPhoenixWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "4bvBFSG/2afZS4EbhV/Vz5+MCNvFi2LFXDmk9ZQDds9WW9I5jdoLfo9athyPF4kG",
  server: false

# In test we don't send emails.
config :recipe_book_phoenix, RecipeBookPhoenix.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
