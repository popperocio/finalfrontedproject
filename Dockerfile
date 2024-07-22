FROM node:14 as build

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY src /app/src

RUN npm run build

COPY dist /app/dist 

RUN npm install -g serve

CMD ["serve", "-s", "dist"]