FROM node:alpine

WORKDIR /auth_firebase

COPY package*.json ./

RUN npm install -f
RUN npm install docker

COPY . .

EXPOSE 9050

CMD [ "npm", "start" ]