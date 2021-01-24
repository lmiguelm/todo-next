import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../models/user';
import { compare } from '../../../services/encrypt';

import connectToDatabase from '../../../config/connectionDb';
import { generateToken } from '../../../services/auth';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();

    const { email, password  } = req.body;

    const user = await User.findOne({ email });
    
    if(!user) {
      throw new Error('E-mail inválido.');
    }
    
    if(!compare(password, user.password)) {
      throw new Error('Senha inválida.');
    }
    
    const token = await generateToken(user._id);

    res.setHeader('Authotization', token);
    res.setHeader('access-control-expose-headers', 'Authorization');
    res.status(200);
    res.json(user);
    return res;

  } catch (e) {
    return res.status(400).json({message: e.message || 'Erro inesperado.'});
  }
}