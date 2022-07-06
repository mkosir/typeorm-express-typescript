import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from 'orm/entities/users/User';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const usersPage = async (req: Request, res: Response, next: NextFunction) => {
  const { page, items } = req.query;
  const userRepository = getRepository(User);
  try {
    const users = await userRepository.findAndCount({ select: ['id'] });

    const pageNumber = (Number(page) - 1) * users.length;
    const result = await userRepository.createQueryBuilder('users').limit(Number(items)).offset(pageNumber).getMany(); //ordenar

    res.customSuccess(200, 'result.', result);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of users.`, null, err);
    return next(customError);
  }
};
