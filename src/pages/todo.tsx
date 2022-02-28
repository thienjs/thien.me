import React, { useState } from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'

import Router from 'next/router'
import Todo, { TodoProps } from '../components/todo/Todo'
import { prisma } from '../lib/prisma'
import { useSession, getSession, signIn } from 'next-auth/react'
import Title from '~/components/ui/typography/Title'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }
  const feed = await prisma.todo.findMany({
    orderBy: {
      id: 'desc',
    },
    where: {
      author: { email: session.user.email },
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  })
  return {
    props: { feed },
  }
}

type Props = {
  feed: TodoProps[]
}

const TodoPage: React.FC<Props> = (props) => {
  const { data: session } = useSession()
  const [task, setTask] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { task }
      await fetch(`/api/todo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/todo')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="">
        <Title>Todo</Title>
        <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          my todo list
        </p>

        {session ? (
          <>
            <form
              className="flex w-full flex-col justify-between"
              onSubmit={submitData}
            >
              <textarea
                cols={60}
                onChange={(e) => setTask(e.target.value)}
                placeholder="task"
                rows={1}
                value={task}
                className="rounded-md border-gray-200 bg-gray-300  text-gray-700 dark:bg-zinc-400 dark:text-gray-100"
              />
              <div className="mt-3 mb-4 flex justify-end">
                <input
                  type="submit"
                  value="add"
                  className="rounded-md border bg-emerald-500 px-6 py-2 text-white shadow-lg  hover:bg-slate-600 hover:text-gray-500 dark:border-emerald-900 dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:hover:text-gray-100"
                />
              </div>
            </form>
            <main>
              <h2 className="mt-4 text-lg font-semibold">Tasks:</h2>
              {props.feed.map((todo) => (
                <div key={todo.id} className="">
                  <Todo todo={todo} />
                </div>
              ))}
            </main>
          </>
        ) : (
          <>
            <p className="mb-1 text-sm">please sign in use todo</p>
            <button
              className="mb-2 rounded-md bg-gray-400 px-4 py-2 dark:bg-gray-600"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default TodoPage
