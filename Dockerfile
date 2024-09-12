# Use the official Node.js image as the base image
FROM node:18-alpine

# Install Redis
RUN apk add --update --no-cache redis

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the Docker image
COPY package*.json ./

# Limpiar la caché de Yarn antes de instalar las dependencias
RUN yarn cache clean

# Install the dependencies in the Docker image
RUN yarn install --frozen-lockfile

# Copy the rest of the project files to the Docker image
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the ports in the Docker image
EXPOSE 80
EXPOSE 6379

# Start Redis Server and the Next.js application when the Docker container starts
CMD ["sh", "-c", "redis-server --daemonize yes && yarn start:staging"]
# CMD ["sh", "-c", "redis-server --daemonize yes && yarn start"]
#CMD ["sh", "-c", "redis-server --daemonize yes && yarn start:production"]