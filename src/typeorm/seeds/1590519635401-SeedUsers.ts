import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Role } from '../entities/users/types';
import { User } from '../entities/users/User';

export class SeedUsers1590519635401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    const userRepository = getRepository(User);

    user.username = 'Heisenberg';
    user.name = 'Walter White';
    user.email = 'admin@admin.com';
    user.password = 'pass1';
    user.hashPassword();
    user.role = 'ADMINISTRATOR' as Role;
    await userRepository.save(user);

    user = new User();
    user.username = 'Jesse';
    user.name = 'Jesse Pinkman';
    user.email = 'standard@standard.com';
    user.password = 'pass1';
    user.hashPassword();
    user.role = 'STANDARD' as Role;
    await userRepository.save(user);

    user = new User();
    user.username = 'Sky';
    user.name = 'Skyler White';
    user.email = 'skyler.white@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Hank';
    user.name = 'Hank Schrader';
    user.email = 'hank.schrader@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Marie';
    user.name = 'Marie Schrader';
    user.email = 'marie.schrader@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'The Lawyer';
    user.name = 'Saul Goodman';
    user.email = 'saul.goodman@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Gus';
    user.name = 'Gustavo Fring';
    user.email = 'gustavo.fring@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Mike';
    user.name = 'Michael Ehrmantraut';
    user.email = 'michael.ehrmantraut@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Tio';
    user.name = 'Hector Salamanca';
    user.email = 'hector.salamanca@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);

    user = new User();
    user.username = 'Tuco';
    user.name = 'Alberto Salamanca';
    user.email = 'alberto.salamanca@test.com';
    user.password = 'pass1';
    user.hashPassword();
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
