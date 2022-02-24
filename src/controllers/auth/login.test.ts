import 'mocha';
import { expect } from 'chai';
import { agent as request } from 'supertest';
import { getRepository, Connection, Repository } from 'typeorm';

import { dbCreateConnection } from 'orm/dbCreateConnection';
import { Role } from 'orm/entities/users/types';
import { User } from 'orm/entities/users/User';

import { app } from '../../';

describe('Login', () => {
  let dbConnection: Connection;
  let userRepository: Repository<User>;

  const userPassword = 'pass1';
  const user = new User();
  user.username = 'Badger';
  user.name = 'Brandon Mayhew';
  user.email = 'brandon.mayhew@test.com';
  user.password = userPassword;
  user.hashPassword();
  user.role = 'ADMINISTRATOR' as Role;

  before(async () => {
    dbConnection = await dbCreateConnection();
    userRepository = getRepository(User);
  });

  beforeEach(async () => {
    await userRepository.save(user);
  });

  afterEach(async () => {
    await userRepository.delete(user.id);
  });

  it('should return a JWT token', async () => {
    const res = await request(app).post('/v1/auth/login').send({ email: user.email, password: userPassword });
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Token successfully created.');
    expect(res.body.data).not.to.be.empty;
    expect(res.body.data).to.be.an('string');
  });

  it("should report error when email and password don't match", async () => {
    const res = await request(app).post('/v1/auth/login').send({ email: user.email, password: 'wrong_password' });
    expect(res.status).to.equal(404);
    expect(res.body.errorType).to.equal('General');
    expect(res.body.errors).to.eql(['Incorrect email or password']);
    expect(res.body.errorRaw).to.an('null');
    expect(res.body.errorsValidation).to.an('null');
  });

  it('should report error when the email provided is not valid', async () => {
    const res = await request(app).post('/v1/auth/login').send({ email: 'not_valid_email', password: userPassword });
    expect(res.status).to.equal(400);
    expect(res.body.errorType).to.equal('Validation');
    expect(res.body.errorMessage).to.equal('Login validation error');
    expect(res.body.errors).to.an('null');
    expect(res.body.errorRaw).to.an('null');
    expect(res.body.errorsValidation).to.eql([
      {
        email: 'Email is invalid',
      },
    ]);
  });
});
