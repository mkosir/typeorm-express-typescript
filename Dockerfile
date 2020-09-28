FROM node:14.11.0-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 4000