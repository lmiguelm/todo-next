import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../../models/todo';

import connectToDatabase from '../../../../config/connectionDb';

export default async function All(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();

    const { id } = req.query;

    const todo = await Todo.findByIdAndUpdate(id, { status: 'deleted' });
  
    return res.json(todo);

  } catch (e) {
    console.log(e);
    return res.status(400).json({message: 'Ocorreu algum erro desconhecido'});
  }
}