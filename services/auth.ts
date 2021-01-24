import { rejects } from 'assert';
import jwt from 'jsonwebtoken';

export async function generateToken(id: string) {
  const token = jwt.sign({ id }, process.env.SECRET_KEY as string, {
    expiresIn: 172800
  });

  return `Bearer ${token}`;
}

export async function validateToken(userToken: string): Promise<string> {

  return new Promise((resolve, reject) => {
    const parts = userToken.split(' ');

    if(parts.length !== 2) {
      return reject('Token erro');
    }
  
    const [scheme, token ] = parts;
  
    if(!/^Bearer$/i.test(scheme)) {
      return reject('Token mal formatado');
    }
  
    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded: any) => {
      if(err) {
        console.log(err);
        console.log(token)
        console.log(process.env.SECRET_KEY)
        console.log(process.env.MONGODB_URL)
        return reject('Token inválido');
      }
      
      return resolve(decoded.id);
    });
  });
}