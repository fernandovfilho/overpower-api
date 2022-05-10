FROM node:14.5.0-alpine

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm ci

COPY . /server

CMD [ "npm", "run", "start" ]
