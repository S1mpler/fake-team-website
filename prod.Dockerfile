FROM node:latest

COPY . .

ENV MIX_ENV=prod

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

RUN curl https://packages.microsoft.com/config/debian/9/prod.list > /etc/apt/sources.list.d/mssql-release.list

RUN apt-get update

RUN ACCEPT_EULA=Y apt-get install -y certbot msodbcsql17

RUN cd client && npm install && ng build --prod

RUN cd api && npm install

CMD bin/run_prod
