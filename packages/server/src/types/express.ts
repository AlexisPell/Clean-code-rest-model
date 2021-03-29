import { IUser } from './types';
import { Request } from 'express';

export type MyRequest = Request & {
  user: IUser;
};
