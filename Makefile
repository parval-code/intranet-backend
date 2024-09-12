#                   ##        .
#             ## ## ##       ==
#          ## ## ## ##      ===
#      /""""""""""""""""\___/ ===
# ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
#      \______ o          __/
#        \    \        __/
#         \____\______/
#
#         |          |
#      __ |  __   __ | _  __   _
#     /  \| /  \ /   |/  / _\ |
#     \__/| \__/ \__ |\_ \__  |
#

CONTAINER_NAME = intranet-backend

help:
	@echo "Please use 'make <target>' where <target> is one of"
	@echo "  drun                               run the docker image"
	@echo "  dbash                              starts bash inside a running container."

dbuild:
	@echo "Building docker image..."
	docker-compose build app

drunDB:
	docker run --name postgres -p "5432:5432" -e POSTGRES_DB=api -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -d "postgres:10-alpine"

drebuildDB:
	@echo "Rebuilding postgres-db image..."
	docker-compose rm --stop --force postgres
	docker-compose up -d --no-deps --build postgres

drun:
	make dstop
	make dbuild
	docker-compose run --name ${CONTAINER_NAME} --service-ports --rm app bash

dbash:
	docker exec -it $(CONTAINER_NAME) /bin/bash

dstop:
	docker-compose stop
