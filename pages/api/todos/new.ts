import { NextApiRequest, NextApiResponse } from 'next';

import { validateToken } from '../../../services/auth';

import { Todo } from '../../../models/todo';

import connectToDatabase from '../../../config/connectionDb';

export default async function NewTodo(req: NextApiRequest, res: NextApiResponse) {

  let userId: string;
  // validação do token
  try { 
    userId = await validateToken(req.headers.authorization);
  } catch(e) {
    return res.status(401).json({message: e});
  }
  
  try {
    await connectToDatabase();
    const todo = await Todo.create({...req.body, user: userId});
    return res.json(todo);
  } catch(e) {
    return res.status(400).json({message: e});
  }
}
