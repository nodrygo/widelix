use Mix.Config

config :phoenix, Widelix.Router,
  port: System.get_env("PORT") || 4001,
  ssl: false
