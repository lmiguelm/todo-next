import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../../models/todo';

import connectToDatabase from '../../../../config/connectionDb';
import { validateToken } from '../../../../services/auth';

export default async function All(req: NextApiRequest, res: NextApiResponse) {

  let userId: string;
  // validação do token
  try { 
    userId = await validateToken(req.headers.authorization);
  } catch(e) {
    return res.status(401).json({message: e});
  }

  try {
    await connectToDatabase();

    const { status } = req.query;

    let todos = [];

    if(status == 'all') {
      todos = await Todo.find({user: {_id: userId}}).sort({ createdAt: 'DESC' });
    } else {
      todos = await Todo.find({ status, user: {_id: userId} }).sort({ createdAt: 'DESC' });
    }

    return res.json(todos);

  } catch (e) {
    console.log(e);
    return res.status(400).json({message: 'Ocorreu algum erro desconhecido'});
  }
}