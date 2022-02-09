import type { NextApiRequest, NextApiResponse } from 'next'

import { getPublishedSnippets } from '~/lib/notion'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getPublishedSnippets(process.env.NOTION_SNIPPETS_DB_ID)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({ totalSnippets: data.length })
}
