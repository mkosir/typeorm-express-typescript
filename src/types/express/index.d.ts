import { JwtPayload } from '../JwtPayload';
import { Language } from '../../typeorm/entities/user/types';

declare global {
  namespace Express {
    export interface Request {
      jwtPayload: JwtPayload;
      language: Language;
    }
    export interface Response {
      customSuccess(httpStatusCode: number, message: string, data?: any): Response;
    }
  }
}
