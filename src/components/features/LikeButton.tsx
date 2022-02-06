import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { fetcher } from 'lib/fetcher'
import { Likes } from 'lib/types'
import { FaHeart } from 'react-icons/fa'

export default function LikeButton({ slug }) {
  const [hydrated, setHydrated] = useState(false);
  const { data } = useSWR<Likes>(
    `/api/likes/${slug}`,
    fetcher,

  );


  const likes = new Number(data?.total)
  const [hasLiked, setHasLiked] = useState(false);

  const registerLike = () =>
    fetch(`/api/likes/${slug}`, {
      method: 'POST',
    })

  return (
    <div>
      <button onClick={registerLike} className="mr-2">
        <FaHeart />
      </button>
      {`${likes > 0 ? likes.toLocaleString() : '0'} likes`}
    </div>
  )
}
