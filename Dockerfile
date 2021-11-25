FROM node:lts
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 8160
CMD yarn knex migrate:latest &&\
# yarn knex seed:run &&\
node index.js