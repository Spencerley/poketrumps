# Use a base image
FROM node:18-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

EXPOSE 3000

COPY . /home/app/

RUN npm install

CMD ["npm", "start"]