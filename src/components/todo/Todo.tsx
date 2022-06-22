import React from 'react'
import Router from 'next/router'

import { useSession, signIn, signOut } from 'next-auth/react'

import useSWR, { useSWRConfig } from 'swr'
import { GoTrashcan } from 'react-icons/go'

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
    Router.push('/todo')
  }

  return (
    <div className="w-full border-b border-gray-200 bg-opacity-80 py-3  px-2 pb-2 text-black hover:bg-gray-200 dark:border-gray-800  dark:text-gray-400 dark:hover:bg-zinc-800">
      <div className="text-gray-800 dark:text-gray-300">{todo.task}</div>
      <div className="flex justify-between">
        <div className="text-xs ">{authorName}</div>
        <div className="text-xs "></div>

        <div className="text-xs text-gray-300 dark:text-gray-600">
          <button
            className="cursor-pointer text-sm text-red-600 dark:text-red-400"
            onClick={deleteEntry}
          >
            <GoTrashcan className="z-10" />
          </button>
          {/* session?.user?.name === todo.author.name && <>delete</> */}
          {/* format(new Date(todo.updated_at), "d MMM yyyy 'at' h:mm bb") */}
        </div>
      </div>
    </div>
  )
}

export default Todo
