import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '~/components/ui/Layout'
import Post, { PostProps } from '../components/Post'
import { useSession, getSession } from 'next-auth/react'
import { prisma } from '../lib/prisma'
import { basePath } from "~/utils/config";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return {
    props: { drafts },
  }
}

type Props = {
  drafts: PostProps[]
}

const Drafts: React.FC<Props> = (props) => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="">
        <h1>My Drafts</h1>
        <main className='flex flex-col '>
          {props.drafts.map((post) => (
            <div key={post.id} className="">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>

    </Layout>
  )
}

export default Drafts
