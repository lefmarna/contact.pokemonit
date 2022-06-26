.PHONY: docker-build
docker-build:
	docker-compose build --no-cache --force-rm

.PHONY: init
init:
	@make docker-build
	@make up
	@make yarn install

.PHONY: setup
setup:
	@make up
	@make open
	@make dev

.PHONY: up
up:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down

.PHONY: restart
restart:
	@make down
	@make up

.PHONY: destroy
destroy:
	docker-compose down --rmi all --volumes

.PHONY: ps
ps:
	docker-compose ps

.PHONY: yarn install
yarn install:
	docker-compose exec node yarn install

.PHONY: node
node:
	docker-compose exec node bash

.PHONY: dev
dev:
	docker-compose exec node yarn dev

.PHONY: build
build:
	docker-compose exec node yarn build

.PHONY: start
start:
	docker-compose exec node yarn start

.PHONY: lint
lint:
	docker-compose exec node yarn lint

.PHONY: open
open:
	devcontainer open
