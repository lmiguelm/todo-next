import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../models/user';
import connectionToDatabase from '../../../config/connectionDb';
import { encrypt } from '../../../services/encrypt';


export default async function NewUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectionToDatabase();

    const existEmail = await User.find({ email: req.body.email });
    if(existEmail.length > 0) {
      throw new Error('E-mail já cadastrado.');
    }

    const passwordEncrypted = await encrypt(req.body.password);

    const user = await User.create({...req.body, password: passwordEncrypted});

    return res.json(user);

  } catch (e) {
    return res.status(400).json({ message: e.message || 'Erro inesperado.' });
  }
}