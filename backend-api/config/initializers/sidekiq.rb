REDIS_NAME = # frozen_string_literal: true

  if Rails.env.development?
    'redis'
  else
    'redis-job'
               end

Sidekiq.configure_server do |config|
  config.redis = { url: "redis://:#{Rails.application.credentials[:redis_cache_password]}@#{REDIS_NAME}:6379/0" }
end

Sidekiq.configure_client do |config|
  config.redis = { url: "redis://:#{Rails.application.credentials[:redis_cache_password]}@#{REDIS_NAME}:6379/0" }
end
