FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production --frozen-lockfile

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
