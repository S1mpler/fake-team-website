FROM node:latest

WORKDIR /app

COPY . .

ENV MIX_ENV=prod

RUN cd client && npm install && npm run ng build

RUN cd api && npm install && npm run start

CMD bin/run_prod
