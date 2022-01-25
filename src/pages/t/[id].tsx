import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/ui/Layout'
import Router from 'next/router'
import { TodoProps } from '../../components/todo/Todo'
import { prisma } from '../../lib/prisma'
import { useSession } from 'next-auth/react'
import { basePath } from '~/utils/config'
import { GoTrashcan } from 'react-icons/go'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })
  return {
    props: todo,
  }
}

async function deleteTodo(id: number): Promise<void> {
  await fetch(`/api/todo/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/todo')
}

const todo: React.FC<TodoProps> = (props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)
  const todoBelongsToUser = session?.user?.email === props.author?.email
  let draftNumber = props.id.toString()

  return (
    <Layout>
      <div className="w-full px-16">
        <h2 className="font-semibold text-lg mb-2 mt-20">{draftNumber}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
          By {props?.author?.name || 'Unknown author'}
        </p>
        <div className="mb-10">{props.task}</div>

        {userHasValidSession && todoBelongsToUser && (
          <button
            className="ml-6 px-4 py-2 border "
            onClick={() => deleteTodo(props.id)}
          >
            <GoTrashcan />
          </button>
        )}
      </div>
    </Layout>
  )
}

export default todo
