import { Role } from './entities/User';

export type JwtPayload = {
  id: number;
  name: string;
  email: string;
  role: Role;
  created_at: Date;
};
