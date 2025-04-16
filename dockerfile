FROM node:latest

WORKDIR /home/build/frontend
COPY . .

RUN npm i -g bun@latest
RUN npm i -g bun@latest
RUN npm i -g pm2@latest

RUN npm i 

EXPOSE 3000 3443

CMD ["nodemon"]