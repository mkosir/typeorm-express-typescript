import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import validator from 'validator';

import { ConstsUser } from 'consts/ConstsUser';
import { User } from 'typeorm/entities/users/User';
import { CustomError, ErrorValidation } from 'utils/response/CustomError';

export const validatorEdit = async (req: Request, res: Response, next: NextFunction) => {
  let { username, name } = req.body;
  const errorsValidation: ErrorValidation[] = [];
  const userRepository = getRepository(User);

  username = !username ? '' : username;
  name = !name ? '' : name;

  const user = await userRepository.findOne({ username });
  if (user) {
    errorsValidation.push({ username: `Username '${username}' already exists` });
  }

  const usernameMaxLength = ConstsUser.USERNAME_MAX_CHAR;
  if (!validator.isLength(username, { max: usernameMaxLength })) {
    errorsValidation.push({ username: `Username can be max ${usernameMaxLength} characters` });
  }

  const nameMaxLength = ConstsUser.NAME_MAX_CHAR;
  if (!validator.isLength(name, { max: nameMaxLength })) {
    errorsValidation.push({ name: `Username can be max ${nameMaxLength} characters` });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(
      400,
      'Validation',
      'Edit user validation error',
      null,
      null,
      errorsValidation,
    );
    return next(customError);
  }
  return next();
};
