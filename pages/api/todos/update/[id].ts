import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../../models/todo';

import connectToDatabase from '../../../../config/connectionDb';
import { validateToken } from '../../../../services/auth';

export default async function All(req: NextApiRequest, res: NextApiResponse) { 

  try { 
    await validateToken(req.headers.authorization);
  } catch(e) {
    return res.status(401).json({message: e});
  }

  try {
    await connectToDatabase();

    const { id } = req.query;


    const todos = await Todo.findByIdAndUpdate({_id: id}, req.body);

    return res.json(todos);

  } catch (e) {
    console.log(e);
    return res.status(400).json({message: 'Ocorreu algum erro desconhecido'});
  }
}