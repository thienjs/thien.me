import React from 'react'
import Router from 'next/router'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import { useSession, signIn, signOut } from "next-auth/react"
import { author } from '~/data/siteMetadata'
import useSWR, { useSWRConfig } from 'swr'

export type TodoProps = {
  id: number

  author: {
    name: string
    email: string
  } | null
  task: string

  // updated_at: Date
  //created_at: Date
}

const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  const { data: session } = useSession()

  const authorName = todo.author ? todo.author.name : 'Unknown author'

  const { mutate } = useSWRConfig()
  const deleteEntry = async (e) => {
    e.preventDefault()

    await fetch(`/api/todo/${todo.id}`, {
      method: 'DELETE',
    })

    mutate('/api/todo')
  }

  return (
    <div
      className="py-3 px-2 text-black dark:text-gray-400 w-full  bg-opacity-80 border-b pb-2 border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800"
      onClick={() => Router.push('/t/[id]', `/t/${todo.id}`)}
    >
      <div className="text-gray-800 dark:text-gray-300">{todo.task}</div>
      <div className="flex justify-between">
        <div className="text-xs ">{authorName}</div>
        <div className="text-xs "></div>

        <div className="text-xs text-gray-300 dark:text-gray-600">
          <button
            className="text-sm text-red-600 dark:text-red-400"
            onClick={deleteEntry}
          >
            Delete
          </button>
          {/* session?.user?.name === todo.author.name && <>delete</> */}
          {/* format(new Date(todo.updated_at), "d MMM yyyy 'at' h:mm bb") */}
        </div>
      </div>
    </div>
  )
}

export default Todo
