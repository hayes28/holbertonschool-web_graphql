.PHONY: build run start stop copy shell

# Build the docker image
build:
	docker build --no-cache -t graphql .

# Run the docker container with volume
run:
	docker run -d -t --name graphql-container -p 4000:4000 -v $(PWD):/app graphql

# Start the docker container
start:
	docker start graphql-container

# Stop the docker container
stop:
	docker stop graphql-container

# Copy files to the running container
copy:
	docker cp . graphql-container:/app

# Open a shell inside the running container
shell:
	docker exec -it graphql-container /bin/bash
