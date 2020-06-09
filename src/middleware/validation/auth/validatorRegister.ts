import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { ConstsUser } from '../../../consts/ConstsUser';
import { CustomError, ErrorValidation } from '../../../utils/response/CustomError';

export const validatorRegister = (req: Request, res: Response, next: NextFunction) => {
  let { email, password, passwordConfirm } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  email = !email ? '' : email;
  password = !password ? '' : password;
  passwordConfirm = !passwordConfirm ? '' : passwordConfirm;

  if (!validator.isEmail(email)) {
    errorsValidation.push({ email: 'Email is invalid' });
  }

  if (validator.isEmpty(email)) {
    errorsValidation.push({ email: 'Email is required' });
  }

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password is required' });
  }

  const passwordMinLength = ConstsUser.PASSWORD_MIN_CHAR;
  if (!validator.isLength(password, { min: passwordMinLength })) {
    errorsValidation.push({ password: `Password must be at least ${passwordMinLength} characters` });
  }

  if (validator.isEmpty(passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Confirm password is required' });
  }

  if (!validator.equals(password, passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Passwords must match' });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(
      400,
      'Validation',
      'Register validation error',
      null,
      null,
      errorsValidation,
    );
    return next(customError);
  }
  return next();
};
