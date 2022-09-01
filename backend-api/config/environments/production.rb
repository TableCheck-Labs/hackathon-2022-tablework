# frozen_string_literal: true

Rails.application.configure do
  config.cache_classes = true
  # Do not eager load code on boot.
  config.eager_load = false
  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local = false

  config.action_cable.allowed_request_origins = ['http://0.0.0.0:3000, http://localhost:3000, http://127.0.0.1:3000']

  # Setup caching
  config.action_controller.perform_caching = true
  config.cache_store = :redis_cache_store, { url: "redis://:#{Rails.application.credentials[:redis_cache_password]}@redis:6379/0" }
  config.public_file_server.headers = {
    'Cache-Control' => "public, max-age=#{2.days.to_i}"
  }

  # Store files locally.
  config.active_storage.service = :local

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :notify

  # Raise an error on page load if there are pending migrations.
  # config.active_record.migration_error = :page_load
  # config.active_record.verbose_query_logs = true

  # config.web_console.whitelisted_ips = '172.0.0.0/8'

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?

  # Compress JavaScripts and CSS.
  config.assets.js_compressor = :uglifier

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = true

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = true

  config.log_level = :debug

  # Prepend all log lines with the following tags.
  # config.log_tags = [ :subdomain, :uuid ]
  config.log_tags = [:request_id]

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  if ENV['RAILS_LOG_TO_STDOUT'].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end
end
