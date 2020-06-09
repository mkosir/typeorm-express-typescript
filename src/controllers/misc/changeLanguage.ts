import { Request, Response, NextFunction } from 'express';

export const changeLanguage = async (req: Request, res: Response, next: NextFunction) => {
  const { language } = req.body;

  console.log('Log: changeLanguage -> language', language);
  res.customSuccess(200, 'Language changed successfully.');
};
