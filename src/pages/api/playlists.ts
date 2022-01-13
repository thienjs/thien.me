import { getUsersPlaylists } from '../../lib/playlist'
import { getSession } from 'next-auth/react'



const handler = async (req, res) => {
  const {
    token: { access_token },
  } = await getSession({ req })
  const response = await getUsersPlaylists(access_token)
  const { items } = await response.json()

  return res.status(200).json({ items })
}

export default handler
