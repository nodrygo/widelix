# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the router
config :phoenix, Widelix.Router,
  port: System.get_env("PORT"),
  ssl: false,
  secret_key_base: "BPAdn9KNttOskWBoUAVjFVP5BXIASrkWdAcCXMWgE/XikBWulE2d2wtSzqUqpOahPI5tHp32UaVZsNAcPIC2+Q==",
  catch_errors: true,
  debug_errors: false,
  error_controller: Widelix.PageController

# Session configuration
config :phoenix, Widelix.Router,
  session: [store: :cookie,
            key: "_widelix_key"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :widelix, :files,
  basePath: "/home/ygo/projects"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
