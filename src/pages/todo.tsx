import React, { useState } from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'
import Layout from '../components/ui/Layout'
import Router from 'next/router'
import Todo, { TodoProps } from '../components/todo/Todo'
import { prisma } from '../lib/prisma'
import ButtonLink from '~/components/ui/links/ButtonLink'
import { useSession, signIn, signOut } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.todo.findMany({
    where: {
      published: true,
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
  const [content, setContent] = useState('')
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { content }
      await fetch(`/api/todo`, {
        method: 'todo',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/drafts')
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
            <form className="flex flex-col" onSubmit={submitData}>
              <p className="text-sm text-gray-700 dark:text-gray-500 mb-4">
                please keep comments friendly. thank you.
              </p>

              <textarea
                cols={50}
                onChange={(e) => setContent(e.target.value)}
                placeholder="comment"
                rows={2}
                value={content}
                className="text-gray-600 dark:text-gray-100 dark:bg-zinc-400"
              />
              <div className="flex justify-between mt-3 mb-4">
                <ButtonLink className="" href="/drafts">
                  view drafts
                </ButtonLink>
                <input
                  type="submit"
                  value="write draft"
                  className="hover:text-cyan-500 px-6 py-2 border rounded-md bg-cyan-600 dark:bg-cyan-800"
                />
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="text-sm mb-1">please sign in to sign the guestbook</p>
            <button
              className="dark:bg-gray-600 px-4 py-2 rounded-md mb-2 bg-gray-400"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </>
        )}

        <main>
          <h2 className="text-lg font-semibold mt-4">Comments:</h2>
          {props.feed.map((todo) => (
            <div key={todo.id} className="">
              <Todo todo={todo} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default TodoPage
