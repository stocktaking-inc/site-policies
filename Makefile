CONTAINER_NAME := astro
NETWORK_NAME := stocktaking-net

.PHONY: build run

build:
	docker build -t $(CONTAINER_NAME) .

run:
	docker run -d \
		--name $(CONTAINER_NAME) \
		--network $(NETWORK_NAME) \
		-p 4321:4321 \
		$(CONTAINER_NAME)
