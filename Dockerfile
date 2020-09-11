FROM node:12.18

# Copy source code
COPY . /usr/src/app

# Change working directory
WORKDIR /usr/src/app

# Install dependencies
RUN yarn install

EXPOSE 8080

# Launch application
ENTRYPOINT [ "yarn", "start" ]