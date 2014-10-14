use Mix.Config

# ## SSL Support
#
# To get SSL working, you will need to set:
#
#     ssl: true,
#     keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
#     certfile: System.get_env("SOME_APP_SSL_CERT_PATH"),
#
# Where those two env variables point to a file on
# disk for the key and cert.

config :phoenix, Widelix.Router,
  port: System.get_env("PORT"),
  ssl: false,
  host: "example.com",
  secret_key_base: "BPAdn9KNttOskWBoUAVjFVP5BXIASrkWdAcCXMWgE/XikBWulE2d2wtSzqUqpOahPI5tHp32UaVZsNAcPIC2+Q=="

config :logger, :console,
  level: :info
