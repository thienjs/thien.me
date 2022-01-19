import React from 'react'
import Router from 'next/router'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

export type PostProps = {
  id: number
  title: string
  author: {
    name: string
    email: string
  } | null
  content: string
  published: boolean
  updated_at: Date
  created_at: string
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <div
      className="border-1 border p-2 px-4 my-2 text-black dark:text-gray-400 w-96  bg-opacity-80"
      onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
    >
      <h2 className="font-semibold ">{post.title}</h2>
      <small className="text-xs mb-2text-black ">By {authorName}</small>
      <div className="">{post.content}</div>
      <div></div>
      <div className="">{post.created_at}</div>
      <div className="">{post.updated_at}</div>
    </div>
  )
}

export default Post
