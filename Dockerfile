FROM node:12.18.2-alpine

WORKDIR ./node-test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "node", "index.js" ]
