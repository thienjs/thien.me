import React, { useState } from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'
import Layout from '../components/ui/Layout'
import Router from 'next/router'
import Todo, { TodoProps } from '../components/todo/Todo'
import { prisma } from '../lib/prisma'
import ButtonLink from '~/components/ui/links/ButtonLink'
import { GoPlus } from 'react-icons/go'
import { useSession, getSession, signIn } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
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
    <Layout>
      <div className="">
        <h1 className="text-3xl font-semibold mt-4">Todo</h1>
        <p className="text-sm mt-2 mb-4">my todo list</p>

        {session ? (
          <>
            <form
              className="flex flex-col w-full justify-between"
              onSubmit={submitData}
            >
              <textarea
                cols={60}
                onChange={(e) => setTask(e.target.value)}
                placeholder="task"
                rows={1}
                value={task}
                className="text-gray-700 dark:text-gray-100 dark:bg-zinc-400  rounded-md border-gray-200 bg-gray-300"
              />
              <div className="flex justify-end mt-3 mb-4">
                <input
                  type="submit"
                  value="add"
                  className="hover:text-gray-500 dark:hover:text-gray-100 px-6 py-2 border rounded-md bg-emerald-500  dark:bg-emerald-800 text-white hover:bg-slate-600 dark:hover:bg-emerald-900 dark:border-emerald-900 shadow-lg"
                />
              </div>
            </form>
            <main>
          <h2 className="text-lg font-semibold mt-4">Tasks:</h2>
          {props.feed.map((todo) => (
            <div key={todo.id} className="">
              <Todo todo={todo} />
            </div>
          ))}
        </main>
          </>
        ) : (
          <>
            <p className="text-sm mb-1">please sign in use todo</p>
            <button
              className="dark:bg-gray-600 px-4 py-2 rounded-md mb-2 bg-gray-400"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </>
        )}


      </div>
    </Layout>
  )
}

export default TodoPage
