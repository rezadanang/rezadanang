FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y ca-certificates

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set strict-ssl false

RUN npm install

RUN npm install -g nodemon

COPY prisma ./prisma/

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
