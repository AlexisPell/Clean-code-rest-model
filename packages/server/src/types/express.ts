import { IUser } from './types';
import { Request } from 'express';

export interface MyRequest extends Request {
  user: IUser;
}
