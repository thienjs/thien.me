import React from 'react'
import { GetServerSideProps } from 'next'

import Layout from '../../components/ui/Layout'
import Router from 'next/router'
import { PostProps } from '../../components/Post'
import { prisma } from '../../lib/prisma'
import { useSession } from 'next-auth/react'
import { basePath } from '~/utils/config'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
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
    props: post,
  }
}

async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/guestbook')
}

async function deletePost(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/guestbook')
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <div>Authenticating ...</div>
  }
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session?.user?.email === props.author?.email
  let draftNumber = props.id.toString()

  if (!props.published) {
    draftNumber = ` Draft #${draftNumber}`
  }

  return (
    <Layout>
      <div className="w-full px-16">
        <h2 className="font-semibold text-lg mb-2 mt-20">{draftNumber}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
          By {props?.author?.name || 'Unknown author'}
        </p>
        <div className="mb-10">{props.content}</div>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button
            className="px-4 py-2 border mr-10 mb-10"
            onClick={() => publishPost(props.id)}
          >
            Publish
          </button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button
            className="ml-6 px-4 py-2 border "
            onClick={() => deletePost(props.id)}
          >
            Delete
          </button>
        )}
      </div>
    </Layout>
  )
}

export default Post
