FROM node:14 as build

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY dist /app/dist 
COPY infrastructure /app/infrastructure
COPY src /app/src

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-l", "3000", "dist"]
