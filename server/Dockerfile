FROM alpine
MAINTAINER Doguhan Uluca <duluca@gmail.com>

RUN apk --update --no-progress add nodejs unrar bash git

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/src/app

RUN npm install -g typescript

RUN adduser -S nodejs
RUN chown nodejs: /usr/src/app
USER nodejs
# RUN daemon with `dockerd --userns-remap=default`

WORKDIR /usr/src/app

COPY package.json .
RUN NODE_ENV=production

RUN npm install --only=production

ENV HOST "0.0.0.0"
ENV PORT 3000
EXPOSE 3000

COPY . .

CMD [ "dumb-init", "npm", "start" ]