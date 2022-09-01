# frozen_string_literal: true

Rails.application.configure do
  config.cache_classes = false
  # Do not eager load code on boot.
  config.eager_load = false
  # Show full error reports and disable caching.
  config.consider_all_requests_local = true

  config.action_cable.allowed_request_origins = ['http://0.0.0.0:3000, http://localhost:3000, http://127.0.0.1:3000']

  # Setup caching
  config.action_controller.perform_caching = true
  config.cache_store = :redis_cache_store
  config.public_file_server.headers = {
    'Cache-Control' => "public, max-age=#{2.days.to_i}"
  }

  # Store files locally.
  config.active_storage.service = :local

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load
  config.active_record.verbose_query_logs = true

  config.assets.debug = false

  config.debug_exception_response_format = :json

  config.log_level = :debug

  config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = true

  # Adds additional error checking when serving assets at runtime.
  # Checks for improperly declared sprockets dependencies.
  # Raises helpful error messages.
  config.assets.raise_runtime_errors = true
end
