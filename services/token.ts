import jwt from 'jsonwebtoken';

export async function generateToken(id: string) {
  const token = jwt.sign({ id }, process.env.SECRET_KEY as string, {
    expiresIn: 172800
  });

  return `Bearer ${token}`;
}