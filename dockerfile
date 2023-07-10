FROM node:alpine

WORKDIR /auth_firebase

COPY package*.json ./

RUN npm install -f

COPY . .

EXPOSE 9050

CMD [ "npm", "start" ]