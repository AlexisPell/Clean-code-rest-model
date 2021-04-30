FROM node:14

WORKDIR /app

COPY package.json ./
# COPY yarn.lock ./

RUN yarn

COPY . .
COPY .env.production config.env

RUN yarn build

ENV NODE_ENV production

EXPOSE 4000

# CMD [ "node", "dist/index.js" ]
CMD [ "yarn", "pm2" ]

USER node