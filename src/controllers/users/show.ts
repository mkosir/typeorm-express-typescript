import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../typeorm/entities/user/User';
import { CustomError } from '../../utils/response/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const userRepository = getRepository(User);
  try {
    const user = await userRepository.findOne(id, {
      select: ['id', 'username', 'name', 'email', 'role', 'language', 'createdAt', 'updatedAt'],
    });

    if (!user) {
      const customError = new CustomError(404, 'General', `User with id:${id} not found.`, [
        'User not found.',
      ]);
      return next(customError);
    }
    res.customSuccess(200, 'User found', user);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
