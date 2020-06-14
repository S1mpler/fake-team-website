FROM node:latest

COPY . .

ENV MIX_ENV=prod

RUN apt-get update

RUN cd client && npm install && ng build --prod

RUN cd api && npm install

CMD bin/run_prod
