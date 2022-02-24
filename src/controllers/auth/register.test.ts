import 'mocha';
import { expect } from 'chai';
import { agent as request } from 'supertest';
import { getRepository, Connection, Repository } from 'typeorm';

import { dbCreateConnection } from 'orm/dbCreateConnection';
import { User } from 'orm/entities/users/User';

import { app } from '../../';

describe('Register', () => {
  let dbConnection: Connection;
  let userRepository: Repository<User>;

  const userPassword = 'pass1';
  const user = new User();
  user.email = 'brandon.mayhew@test.com';
  user.password = userPassword;
  user.hashPassword();

  before(async () => {
    dbConnection = await dbCreateConnection();
    userRepository = getRepository(User);
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/v1/auth/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('User successfully created.');
    expect(res.body.data).to.be.an('null');
    await userRepository.delete({ email: user.email });
  });

  it('should report error when email already exists', async () => {
    let res = await request(app)
      .post('/v1/auth/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    res = await request(app)
      .post('/v1/auth/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    expect(res.status).to.equal(400);
    expect(res.body.errorType).to.equal('General');
    expect(res.body.errorMessage).to.equal('User already exists');
    expect(res.body.errors).to.eql([`Email '${user.email}' already exists`]);
    expect(res.body.errorRaw).to.an('null');
    expect(res.body.errorsValidation).to.an('null');
    await userRepository.delete({ email: user.email });
  });
});
