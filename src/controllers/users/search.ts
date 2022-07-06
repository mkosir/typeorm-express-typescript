import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from 'orm/entities/users/User';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const search = async (req: Request, res: Response, next: NextFunction) => {
  const search = req.params.search;
  const userRepository = getRepository(User);
  try {
    const user = await userRepository
      .createQueryBuilder('users')
      .where('users.name like :name', { name: `%${search}%` })
      .getMany();

    if (!user) {
      const customError = new CustomError(404, 'General', `User with not found.`, ['User not found.']);
      return next(customError);
    }
    res.customSuccess(200, 'User found', user);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
