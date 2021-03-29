import { Request, Response } from 'express';

const login = async (req: Request, res: Response) => {
  console.log('im here');
  res.json({ msg: 'login route' });
};

export { login };
