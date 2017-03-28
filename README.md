# Minimal MEAN
Easy to learn and use full-stack TypeScript with Angular

See the live demo at https://mm.mod.bz/

Looking for Angular 1.5 Material starter? See demo at http://ng15demo.thejavascriptpromise.com/ and get the source code at https://github.com/duluca/angular1.5-starter

## Getting Started
Are you an absolute beginner or season veteran? Start your JavaScript journey today at http://thejavascriptpromise.com

## Why Minimal MEAN?
It can be daunting to pick the right stack to deliver your idea to the cloud. Without realizing, you can introduce one too many "sandbag of complexity" between you and something you can release. For the first time ever it is possible to do full-stack development with a consistent set of tools and best practices using the same language, JavaScript. No more to context switching between front-end and back-end languages, libraries and tools. That is The JavaScript Promise. My easy to learn and use stack 'Minimal MEAN' will get you started and deployed on the cloud over a lazy weekend, without requiring a MongoDB install, while leveraging the latest tools like async/await with Typescript, Angular, Node v6.

## Pre-requisite
- Install [Docker CE](https://www.docker.com/community-edition)
- Read more about why Docker is important [here](https://gist.github.com/duluca/25de70e41347f38b2283ef90ed69840a)

## Setup
- Install [Node.js](https://nodejs.org/en/)
- Recommended Editor/IDE: [Visual Studio Code](https://code.visualstudio.com/)
- `npm install -g typescript`
- `npm install`
 - This will kick off a script, which will run `npm install` on all child folders.

## Run
- `npm start`
 - This will kick off `docker-compose up` which will configure your web app, server and database.
 - Web App: http://localhost:8080
 - Server: http://localhost:3000
 - Database: http://localhost:27017

## Architecture
- web-app: This folder contains the client side Angular app, configured using [Angular CLI](https://github.com/angular/angular-cli) along with its own individual Node.js server
- server: This folder contains the server side Node.js app that can be used to serve REST APIs and it is capable of connecting to MongoDB

## Continuous Integration and Hosting
- CI is implemented on http://CodeShip.io
- Cloud-Scale Hosting is on http://Xervo.io

## TODO
- [x] Use Angular CLI https://github.com/angular/angular-cli for client-side app setup
- [ ] Add Angular Material https://github.com/angular/material2/blob/master/guides/getting-started.md
- [ ] Material, working examples https://material2-app.firebaseapp.com/ and https://github.com/kara/leashed-in
- [ ] HTTPS using Let's Encrypt
- [ ] Sanitize inputs using TypeScript interfaces with https://www.npmjs.com/package/validator.ts
- [x] Dockerize, because https://gist.github.com/duluca/25de70e41347f38b2283ef90ed69840a
- [x] Simplify build process to only really on npm scripts https://gist.github.com/duluca/4468df69f04d60478af824c23fe094f9