import { NextApiRequest, NextApiResponse } from 'next';

import { validateToken } from '../../../services/auth';

export default async function NewTodo(req: NextApiRequest, res: NextApiResponse) {
  
  let userId: string;
  
  // validação do token
  try { 
    userId = await validateToken(req.headers.authorization);
  } catch(e) {
    return res.status(401).json({message: e});
  }
  
  try {
    return res.json(userId);
  } catch(e) {
    return res.status(400).json({message: e});
  }
}
