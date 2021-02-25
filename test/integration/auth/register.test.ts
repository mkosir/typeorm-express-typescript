import 'mocha';
import { expect } from 'chai';
import { agent as request } from 'supertest';
import { getRepository, Connection, Repository } from 'typeorm';

import { app } from '../../../src/index';
import { dbCreateConnection } from '../../../src/typeorm/dbCreateConnection';
import { User } from '../../../src/typeorm/entities/users/User';

describe('POST /v1/register', () => {
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

  after(async () => {
    await dbConnection.close();
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/v1/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('User successfully created.');
    expect(res.body.data).to.be.an('null');
    await userRepository.delete({ email: user.email });
  });

  it('should report error when email already exists', async () => {
    let res = await request(app)
      .post('/v1/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    res = await request(app)
      .post('/v1/register')
      .send({ email: user.email, password: userPassword, passwordConfirm: userPassword });
    expect(res.status).to.equal(400);
    expect(res.body.error_type).to.equal('General');
    expect(res.body.error_message).to.equal('User already exists');
    expect(res.body.errors).to.eql([`Email '${user.email}' already exists`]);
    expect(res.body.error_raw).to.an('null');
    expect(res.body.errors_validation).to.an('null');
    await userRepository.delete({ email: user.email });
  });
});
