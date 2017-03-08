FROM node:boron

# Install PM2 and Yarn
# RUN npm install pm2 yarn -g

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3666
CMD ["npm", "start"]