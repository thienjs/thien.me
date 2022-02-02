import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '~/lib/prisma';
import { z } from 'zod';

const GuestBookSignSchema = z.object({
  message: z
    .string({
      required_error: 'message is required',
      invalid_type_error: 'Invalid message'
    })
    .min(1)
    .max(500)
});

type GuestBookSignSchema = z.infer<typeof GuestBookSignSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const session = await getSession({ req });
    if (!session) {
      return;
    }
    const { email, name } = session.user;
    const result = await GuestBookSignSchema.safeParseAsync({
      message: req.body.message
    });

    if (!result.success) {
      return res
        .status(400)
        .json({ success: false, message: 'an error occured' });
    }

    try {
      const emailOrName = email ?? name;
      const newEntry = await prisma.guestbook.create({
        data: {
          email: emailOrName,
          body: result.data.message,
          createdBy: name
        }
      });
      return res.status(200).json({ data: newEntry, success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: 'an error occured' });
    }
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
  return;
}