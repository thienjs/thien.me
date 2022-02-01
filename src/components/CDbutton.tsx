import React from 'react'
import { useRouter } from 'next/router'

type Props = {}

const CDbutton = (props: Props) => {
  const router = useRouter()
  return (
    <button
      className="px-2 py-1 font-mono border-gray-300 dark:border-gray-800 border rounded-sm bg-gray-100 dark:bg-zinc-900"
      onClick={() => router.back()}
    >
      cd ..
    </button>
  )
}

export default CDbutton
