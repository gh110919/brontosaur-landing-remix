FROM node:20

WORKDIR /home/build/frontend
COPY . .

RUN npm i -g bun
RUN npm i -g pm2

ARG arg_pm2_pk 
ARG arg_pm2_sk
ENV PM2_PUBLIC_KEY=${arg_pm2_pk}
ENV PM2_SECRET_KEY=${arg_pm2_sk}

RUN bun i 

EXPOSE 3000 80 443

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]