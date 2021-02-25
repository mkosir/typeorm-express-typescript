![Heisenberg](heisenberg.jpg)

# Express / TypeScript / TypeORM RESTful API boilerplate

Minimal boilerplate for building RESTful APIs with JWT authentication and role based authorization using Express, TypeScript & TypeORM with focus on best practices and painless developer experience.

## Requirements

- [Node](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running

_Easily set up a local development environment with single command!_

- clone the repo
- `npm run docker:dev` 🚀

Visit [localhost:4000](http://localhost:4000/) or if using Postman grab [config](/postman).

### _What happened_

Two docker containers are created:

- one container instance with Postgres database seeded with 💊 Breaking Bad characters in `Users` table. Postgres database default credentials are user=`walter`, password=`white` which you can change in [.env file](./.env).
- and one Node (v14 Alpine) container instance with running boilerplate RESTful API service.

## Features:

- [Express](https://github.com/expressjs/express) framework
- [TypeScript v4](https://github.com/microsoft/TypeScript) codebase
- [Docker](https://www.docker.com/) environment
  - easily start local development using [Docker Compose](https://docs.docker.com/compose/) with single command `npm run docker:dev`
  - connect to different staging or production environments `npm run docker: [stage|prod]`
  - ready for microservices development and deployment
- [TypeORM](https://typeorm.io/) using Data Mapper pattern
- JWT authentication and role based authorization using custom middleware
- Consistent HTTP responses and requests payloads with [type definitions](./src/types/express/index.d.ts)
- Error handling middleware with consistent [schema JSON response](./src/utils/response/CustomError.ts), that can be modified to suit your needs
- Set local, stage or production environmental variables using [dotenv](https://github.com/motdotla/dotenv) with [type definitions](./src/types/ProcessEnv.d.ts)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- Linting with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) code formatter
- Git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)

## Other awesome boilerplates:

Each boilerplate comes with it's own flavor, check out other awesome boilerplates:

- [Express and TypeORM with TypeScript](https://github.com/typeorm/typescript-express-example)
- [Node.js, Express.js & TypeScript Boilerplate for Web Apps](https://github.com/jverhoelen/node-express-typescript-boilerplate)
- [Express boilerplate for building RESTful APIs](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [A delightful way to building a RESTful API with NodeJs & TypeScript by @w3tecch](https://github.com/w3tecch/express-typescript-boilerplate)
