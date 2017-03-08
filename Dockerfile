FROM node:alpine
MAINTAINER Keymetrics <contact@keymetrics.io>

RUN npm install pm2 -g
RUN npm install yarn -g
RUN pm2 install pm2-auto-pull

VOLUME ["/app"]

# Expose ports
EXPOSE 80 443 43554

WORKDIR /app

COPY . /app

RUN yarn

# Start process.yml
CMD ["pm2-docker", "start", "--auto-exit", "--env", "production"]