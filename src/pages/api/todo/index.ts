import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { getSession } from 'next-auth/react'

// todo /api/todo
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { task } = req.body

  const session = await getSession({ req })
  if (session) {
    const result = await prisma.todo.create({
      data: {
        task: task,
        author: { connect: { email: session?.user?.email } },
      },
    })
    res.json(result)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
