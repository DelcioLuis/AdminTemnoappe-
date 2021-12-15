FROM node:14-alpine

WORKDIR /usr/web

COPY package.json yarn.lock src ./

RUN yarn


COPY . . 

EXPOSE 3000

CMD [ "yarn", "start" ]