# Express / TypeScript / TypeORM RESTful API boilerplate

Minimal boilerplate for building RESTful APIs with JWT authentication and role based authorization using Express, TypeScript & TypeORM with focus on best practices and painless developer experience.

## Requirements

- [Node](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running

- Clone the repo
- `npm run docker:dev` 🚀

  Two docker container instances are going to be created:

  - one container instance with Postgres database seeded with 💊 Breaking Bad characters in `Users` table. Postgres database default credentials are user=`admin`, password=`admin123` which you can change in [.env file](/config/dev.env).
  - and one Node (v14 Alpine) instance container with running boilerplate RESTful API service.

Visit [localhost:4000](http://localhost:4000/) or if using Postman grab [config](/postman).

## Boilerplate made of:

- [Express](https://github.com/expressjs/express) framework
- [TypeScript v4](https://github.com/microsoft/TypeScript) codebase
- [Docker](https://www.docker.com/) environment, set up for microservices development and deployment
- [TypeORM](https://typeorm.io/) using Data Mapper pattern
- JWT authentication and role based authorization using custom middleware
- Tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- Linting with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) code formatter
- Git hooks with [Husky](https://github.com/typicode/husky)

## Other awesome boilerplates:

Each boilerplate comes with it's own flavor, check out other awesome boilerplates:

- [Express and TypeORM with TypeScript](https://github.com/typeorm/typescript-express-example)
- [Node.js, Express.js & TypeScript Boilerplate for Web Apps](https://github.com/jverhoelen/node-express-typescript-boilerplate)
- [Express boilerplate for building RESTful APIs](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [A delightful way to building a RESTful API with NodeJs & TypeScript by @w3tecch](https://github.com/w3tecch/express-typescript-boilerplate)
