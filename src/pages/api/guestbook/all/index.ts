import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchGuestbookEntries } from '~/lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const data = await fetchGuestbookEntries();
      const entries = data.map((entry) => ({
        id: entry.id,
        body: entry.body,
        createdBy: entry.createdBy.toString(),
        createdAt: entry.createdAt.toString()
      }));
      return res.status(200).json({ data: entries, success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: 'an error occured' });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
  return;
}