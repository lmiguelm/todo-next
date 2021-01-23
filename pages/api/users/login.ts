import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../models/user';
import { compare } from '../../../services/encrypt';

import connectToDatabase from '../../../config/connectionDb';

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

    return res.json(user);

  } catch (e) {
    return res.status(400).json({message: e.message});
  }
}