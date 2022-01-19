import React from 'react'
import Router from 'next/router'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import superjson from 'superjson'

export type PostProps = {
  id: number

  author: {
    name: string
    email: string
  } | null
  content: string
  published: boolean
  // updated_at: Date
  //created_at: Date
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'

  return (
    <div
      className="border border-gray-300 dark:border-gray-600 rounded-md p-2 px-4 my-2 text-black dark:text-gray-400 w-96 mb-2  bg-opacity-80"
      onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
    >
      <div className="text-gray-800 dark:text-gray-300">{post.content}</div>
      <div className="flex">
        <div className="text-xs mb-2text-black ">{authorName}</div>

        {/* <div className="text-sm text-gray-300 dark:text-gray-600">
        {format(new Date(post.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </div> */}
      </div>
    </div>
  )
}

export default Post
