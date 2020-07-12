FROM node:13

RUN apt update -y
RUN apt install -y sqlite3

ENV PINGDOM_API_KEY=PIEZNtrjhJuBGJv5CDO4s9xxGk4fdmIJQ1kMpibaCc2ixUY_1GAL92RdEt3X7QUIozVL0LI
ENV PINGDOM_FEATURED_CHECKS=www.vg.no,direkte.vg.no,static.vg.no,vgd.no,e24.no,tek.no

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production --frozen-lockfile

COPY . .

EXPOSE 3000

RUN yarn build
RUN yarn run update

CMD ["yarn", "start"]
