FROM node:lts-alpine

RUN apk add --update --no-progress make python bash
ENV NPM_CONFIG_LOGLEVEL error

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/src/app

RUN chown node: /usr/src/app
USER node

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN NODE_ENV=production

RUN npm install --only=production

ENV HOST "0.0.0.0"
ENV PORT 3000
EXPOSE 3000

COPY dist .

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "index"]