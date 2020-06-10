FROM node:alpine

RUN mkdir -p /app
COPY package.json /app
COPY server.js /app

EXPOSE 3000

CMD ["npm", "run", "start"]
