import { prisma } from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      const newOrUpdatedLikes = await prisma.likes.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return res.status(200).json({
        total: newOrUpdatedLikes.count.toString(),
      })
    }

    if (req.method === 'GET') {
      const likes = await prisma.likes.findUnique({
        where: {
          slug,
        },
      })

      return res.status(200).json({ total: likes.count.toString() })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
