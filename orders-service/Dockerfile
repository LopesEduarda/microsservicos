FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g pm2

COPY . .

EXPOSE 3002

CMD ["pm2-runtime", "index.js"]
