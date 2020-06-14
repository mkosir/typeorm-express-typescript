# TypeScript / Express / TypeORM RESTful API boilerplate

Scalable boilerplate for building RESTful APIs with JWT authentication and role based authorization using Express, TypeScript, TypeORM, & Mocha.

## Requirements

- [Node](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running

- Clone the repo
- `npm run docker:dev`

  Two docker container instances are going to be created one with Postgres database seeded with 💊 Breaking Bad characters in `Users` table and one Node instance with running boilerplate RESTful API service.

  Visit [localhost:4000](http://localhost:4000/) or if using Postman grab [config](/postman).

## Boilerplate made of:

- [Docker](https://www.docker.com/) environment
- [TypeORM](https://typeorm.io/) using Data Mapper pattern
- JWT authentication and role based authorization using custom middleware
- Linting with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) code formatter
- Tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- Git hooks with [Husky](https://github.com/typicode/husky)

## Other awesome boilerplates:

Each boilerplate comes with it's own flavor, check out other awesome boilerplates:

- [Express and TypeORM with TypeScript](https://github.com/typeorm/typescript-express-example)
- [Express boilerplate for building RESTful APIs](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [A delightful way to building a RESTful API with NodeJs & TypeScript by @w3tecch](https://github.com/w3tecch/express-typescript-boilerplate)
