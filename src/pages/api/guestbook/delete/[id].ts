import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '~/lib/prisma';
import { z } from 'zod';

const GuestBookEntryDeleteSchema = z.object({
  id: z
    .number({
      required_error: 'id is required',
      invalid_type_error: 'Invalid id'
    })
    .min(1)
});

type GuestBookEntryDeleteSchema = z.infer<typeof GuestBookEntryDeleteSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const session = await getSession({ req });
    if (!session) {
      return;
    }
    const { email, name } = session.user;

    const result = await GuestBookEntryDeleteSchema.safeParseAsync({
      id: Number(req.query.id)
    });

    if (!result.success) {
      return res
        .status(400)
        .json({ success: false, message: result.error.issues[0].message });
    }

    const entry = await prisma.guestbook.findUnique({
      where: {
        id: result.data.id
      }
    });

    if (!entry) {
      return res
        .status(500)
        .json({ success: false, message: 'an error occured' });
    }

    const nameOrEmail = email ?? name;
    if (nameOrEmail !== entry.email) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    try {
      const deleteEntry = await prisma.guestbook.delete({
        where: {
          id: result.data.id
        }
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: 'an error occured' });
    }
  }
  res.setHeader('Allow', ['DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
  return;
}