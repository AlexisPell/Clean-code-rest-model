import jwt from 'jsonwebtoken';

export function generateJwt(id: number, email: string, role: string) {
  return jwt.sign({ id, email, role }, (process as any).env.SECRET_KEY, {
    expiresIn: '24h',
  });
}
