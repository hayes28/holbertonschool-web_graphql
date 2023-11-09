# Base Image
FROM node:12-buster

# Setting the Working Directory
WORKDIR /app

# Update the package list and install the required dependencies
RUN apt-get update && apt-get install -y curl gnupg

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the npm dependencies
RUN npm install

# Exposing the Port
EXPOSE 4000 3000

# Copy the entire app
COPY . .
