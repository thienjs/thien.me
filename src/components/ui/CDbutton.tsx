import React from 'react'
import { useRouter } from 'next/router'

type Props = {}

const CDbutton = (props: Props) => {
  const router = useRouter()
  return (
    <button
      className="rounded-sm border border-gray-300 bg-gray-100 px-2 py-1 font-mono dark:border-gray-800 dark:bg-zinc-900"
      onClick={() => router.back()}
    >
      cd ..
    </button>
  )
}

export default CDbutton
