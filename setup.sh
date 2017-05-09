#!/bin/sh

# Setup both the app's and laradock's .env file using the local
# docker machine's ip to connect to the database.
ipLabel = "DOCKER_MACHINE_IP"
ip = $(docker-machine ip)

cp .envlaradock laradock/.env &&
sed -i "s/$ipLabel/$ip/g" laradock/.env;

cp .envapp acitius/.env &&
sed -i "s/$ipLabel/$ip/g" acitius/.env;

# Install dependencies and setup a database for development.
docker-compose -f laradock/docker-compose.yml up -d nginx mysql &&
docker-compose -f laradock/docker-compose.yml exec -it workspace bash << 'EOF'
    npm install;
    composer install &&
    php artisan key:generate &&
    php artisan migrate &&
    php artisan db:seed;
    exit
EOF
