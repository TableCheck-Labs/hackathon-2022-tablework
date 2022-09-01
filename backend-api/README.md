# Tablework Backend

## Requirements

1. Install `docker`
2. Install `docker-compose`

## Run app in docker

Container will run in `development` mode by default

1. `docker-compose build`
2. `docker-compose run --rm app bundle install`
3. `docker-compose up postgres`
4. `docker-compose run --rm app bundle exec rails database:reset`
5. `docker-compose up redis app`

## Run app in container (SQLite3)

Container will run in `development` mode by default

1. `docker compose -f docker-compose.dev.yml build`
2. `docker compose -f docker-compose.dev.yml run --rm app bundle install`
3. `docker compose -f docker-compose.dev.yml run --rm app bundle exec rails database:reset`
4. `docker compose -f docker-compose.dev.yml up redis app`

## Populating database

1. `docker-compose run --rm app rails database:reset`

### Run Production environment with PostgreSQL

Make sure you have persistent-volume of PostgreSQL running somewhere

1. `docker-compose -f docker-compose.prod.yml build --build-arg rails_environment=production app`
2. `docker-compose -f docker-compose.prod.yml run --rm app rails db:create RAILS_ENV=production`
3. `docker-compose -f docker-compose.prod.yml run --rm app rails db:migrate RAILS_ENV=production`
4. `docker-compose -f docker-compose.prod.yml up`

### Executing commands inside Rails

`docker-compose run app bash`

### DEV Preparing image and uploading to registry

1. `docker build --build-arg rails_environment=production -t tablework:latest .`
2. `docker tag tablework:latest <registry>/tablework:latest`
3. `docker push <registry>/tablework:latest`
