# Minimal MEAN
Easy to learn and use full-stack TypeScript with Angular
[Demo Site](http://minimalmean.excellalabs.com/)

**Watch the video:** [Do More with Less: Full Stack TypeScript](https://youtu.be/gi1neXh0uKE?list=PLtevgo7IoQizTQdXtRKEXGguTQbL0F01_)

> Looking for Angular 1.5 Material starter? See demo at http://ng15demo.thejavascriptpromise.com/ and get the source code at https://github.com/duluca/angular1.5-starter

## Getting Started
Are you an absolute beginner or season veteran? Start your JavaScript journey today at http://thejavascriptpromise.com

## Why Minimal MEAN?
It can be daunting to pick the right stack to deliver your idea to the cloud. Without realizing, you can introduce one too many "sandbag of complexity" between you and something you can release. For the first time ever it is possible to do full-stack development with a consistent set of tools and best practices using the same language, JavaScript. No more to context switching between front-end and back-end languages, libraries and tools. That is The JavaScript Promise. My easy to learn and use stack 'Minimal MEAN' will get you started and deployed on the cloud over a lazy weekend, without requiring a MongoDB install, while leveraging the latest tools like async/await with [Typescript](), [Angular LTS](https://www.excella.com/insights/the-best-new-feature-of-angular-4), Node LTS.

**Angular vs React Video:**  [Angular vs React: An Out-of-the-Box Comparison](https://youtu.be/IQr5STWB_HM?list=PLtevgo7IoQizTQdXtRKEXGguTQbL0F01_)

## Pre-requisite
- Install [Docker CE](https://www.docker.com/community-edition)
- Read more about why Docker is important [here](https://gist.github.com/duluca/25de70e41347f38b2283ef90ed69840a)

> To avoid issues that aries from maintaining varying versions of Angular CLI and TypeScript across multiple projects, it is highly recommended that you do **not** globally install `@angular/cli` and `typescript`.

## Setup
- Install [Node.js](https://nodejs.org/en/) v8.3+
- Recommended Editor/IDE: [Visual Studio Code](https://code.visualstudio.com/)
- For a **magical** development experience download these VS Code Extensions:
  - [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
  - [Angular TypeScript Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- `npm install`
 - This will kick off a script, which will run `npm install` on all child folders.
- Define a `.env` file at the root of the project and set the MongoDB admin passowrd. Do NOT commit this file.
```Bash
MONGODB_ADMIN_PASS=your_password_goes_here
MONGODB_APPLICATION_DATABASE=app_db_name
MONGODB_APPLICATION_USER=app_user
MONGODB_APPLICATION_PASS=app_password
MONGO_URI=uri_to_mongodb
```
- See more details about the MongoDB Docker container at [excellalabs/mongo](https://github.com/excellalabs/mongo-docker) which also contains instructions on how to set things up on AWS ECS.
> In your server application use the application information to connect to the database.
Sample connection URI: `mongodb://app_user:app_password@localhost:27017/app_db_name?readPreference=primary`

- Sample `.env` file. **Note:** In configuring the `MONGO_URI`, instead of localhost or an IP address, you must specify `database` which is the name of the container as defined in `docker-compose.yml` file.
```Bash
MONGODB_ADMIN_PASS=admin
MONGODB_APPLICATION_DATABASE=acme
MONGODB_APPLICATION_USER=john.smith
MONGODB_APPLICATION_PASS=g00fy
MONGO_URI=mongodb://john.smith:g00fy@database/acme
```
- You need a seperate `.env` file under Server for development purposses. **Note:** We specify localhost, not the docker-compose name here.
```Bash
MONGO_URI=mongodb://john.smith:g00fy@localhost:27017/acme
```

## Run
- From the root directory run `npm start`
  - This will kick off `docker-compose up` which will build and configure your web app, server and database.
  - Angular Web App: http://localhost:8080
  - Server: http://localhost:3000
  - Database: http://localhost:27017
- Run `npm stop` or `npm clean` to stop or clean Docker's cache.

## Development
- For development purposes run each service individually
  - Angular Web App: `cd web-app` then `npm start` -- which utilizes `ng serve` and will give you livereload. To debug use Augury
  - Server: `cd server` then `npm start` or use the debugger within VS Code (debug configuration is already included)
  - Database: `npm start:database` from the root

## Architecture
- web-app: This folder contains the client side Angular app, configured using [Angular CLI](https://github.com/angular/angular-cli) along with its own individual Node.js server
- server: This folder contains the server side Node.js app that can be used to serve REST APIs and it is capable of connecting to MongoDB
- [document-ts](https://github.com/duluca/documentts): The library to connect and query Mongo in an async, flexible and convenient manner
- [excellalabs/mongo](https://hub.docker.com/r/excellalabs/mongo/): A fully-featured Mongo image (with Auth and SSL) inherited from the official image.

## Continuous Integration and Hosting
- CI _will_ be implemented on CircleCI
- Hosted on AWS ECS
  - You'll need to individually publish your Docker containers to ECS
  - Then update `docker-compose.aws.yml` to pull from the ECS repository
  - Run `npm run publish:aws` on the root folder to create the task definition
  - You'll need to create a new service and attach this task definition to it
  - See the AWS ECS Guide on how to create container repositories, and attaching a task definition to a service: https://gist.github.com/duluca/ebcf98923f733a1fdb6682f111b1a832


## TODO
- [x] Use Angular CLI https://github.com/angular/angular-cli for client-side app setup
- [x] Add Angular Material https://github.com/angular/material2/blob/master/guides/getting-started.md
- [x] Dockerize, because https://gist.github.com/duluca/25de70e41347f38b2283ef90ed69840a
- [x] Simplify build process to only rely on npm scripts https://gist.github.com/duluca/4468df69f04d60478af824c23fe094f9
- [x] Docker Compose Deployment to AWS ECS https://medium.com/@Electricste/amazon-ecs-using-the-cli-with-docker-compose-74287f19b181 http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cmd-ecs-cli-compose.html http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cmd-ecs-cli-compose-service.html
- [ ] HTTPS using Let's Encrypt
- [ ] Sanitize inputs using TypeScript interfaces with https://www.npmjs.com/package/validator.ts
