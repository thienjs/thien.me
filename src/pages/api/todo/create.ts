
import type { NextApiRequest, NextApiResponse } from 'next';

import {prisma} from '~/lib/prisma'



export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {

    const savedContact = await prisma.todo.create({ data: todo });
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};