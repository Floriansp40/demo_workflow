FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm install

EXPOSE 14000
CMD npm run start