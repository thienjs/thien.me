import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userResponse = await fetch(
    'https://api.lanyard.rest/v1/users/925868267690672208'
  )

  const data = await userResponse.json()
  const d = data.data
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({
    status: d.discord_status,
    user: d.discord_user.username
    
  })
}
