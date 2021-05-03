import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

import { ConstsUser } from 'consts/ConstsUser';
import { CustomError } from 'utils/response/custom-error/CustomError';
import { ErrorValidation } from 'utils/response/custom-error/types';

export const validatorChangePassword = (req: Request, res: Response, next: NextFunction) => {
  let { password, passwordNew, passwordConfirm } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  password = !password ? '' : password;
  passwordNew = !passwordNew ? '' : passwordNew;
  passwordConfirm = !passwordConfirm ? '' : passwordConfirm;

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password is required' });
  }

  if (validator.isEmpty(passwordNew)) {
    errorsValidation.push({ passwordNew: 'New password is required' });
  }

  if (validator.isEmpty(passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Password confirm is required' });
  }

  if (!validator.isLength(passwordNew, { min: ConstsUser.PASSWORD_MIN_CHAR })) {
    errorsValidation.push({
      passwordNew: `Password must be at least ${ConstsUser.PASSWORD_MIN_CHAR} characters`,
    });
  }

  if (!validator.equals(passwordNew, passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Passwords must match' });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(
      400,
      'Validation',
      'Change password validation error',
      null,
      null,
      errorsValidation,
    );
    return next(customError);
  }
  return next();
};
