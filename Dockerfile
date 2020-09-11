FROM node:12.18

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN yarn install

EXPOSE 80

# Launch application
ENTRYPOINT [ "yarn", "start" ]