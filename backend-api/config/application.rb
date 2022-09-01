# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Tablework
  class Application < Rails::Application
    config.api_only = true
    config.hosts = [
      IPAddr.new("0.0.0.0/0"),
      IPAddr.new("::/0"),
      "localhost",
      "tablework.vectorsigma.ru"
    ]
    config.load_defaults 7.0
    config.autoload_paths += %W[#{config.root}/lib] # autoload modules
    config.i18n.default_locale = :en
    config.assets.enabled = true
    config.assets.initialize_on_precompile = true
    config.assets.precompile += %w[custom.scss]
    config.active_job.queue_adapter = :sidekiq
    config.encoding = 'utf-8'
    config.time_zone = 'Tokyo'
  end
end
