import React from 'react'
import Router from 'next/router'


import { useSession, signIn, signOut } from "next-auth/react"

export type PostProps = {
  id: number

  author: {
    name: string
    email: string
    image: string
  } | null
  content: string
  published: boolean
  // updated_at: Date
  //created_at: Date
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const { data: session } = useSession()

  const authorName = post.author ? post.author.name : 'Unknown author'
  const authorimage = post.author ? post.author.image : 'noimage'
  return (
    <div>
      <div
        className=" px-4 py-2 bg-gray-100 dark:bg-zinc-900  border  rounded-md border-gray-200 dark:border-gray-800"
        onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
      >
        <div className="text-gray-700 dark:text-gray-400 text-sm">
          {post.content}
        </div>
      </div>
      <div className="flex justify-between mt-1 mb-3">
        <div className="text-xs mb-1 text-gray-600 dark:text-gray-400 ml-2">
          {authorName}
        </div>
        <div className="text-xs text-gray-300 dark:text-gray-600">
          date/placeholder
          {/*format(new Date(post.updated_at), "d MMM yyyy 'at' h:mm bb")*/}
        </div>
      </div>
    </div>
  )
}

export default Post
