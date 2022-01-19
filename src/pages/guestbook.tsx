import React, { useState } from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'
import Layout from '../components/ui/Layout'
import Router from 'next/router'
import Post, { PostProps } from '../components/Post'
import { prisma } from '../lib/prisma'
import ButtonLink from '~/components/links/ButtonLink'
import { useSession, signIn, signOut } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
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
  feed: PostProps[]
}

const Guestbook: React.FC<Props> = (props) => {
  const { data: session } = useSession()
  const [content, setContent] = useState('')
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { content }
      await fetch(`/api/post`, {
        method: 'POST',
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
        <h1 className="text-3xl font-semibold mt-4">Guestbook</h1>
        <p className="text-sm mt-2 mb-4">
          leave a comment, feedback, suggestions for others to see in the
          future.
        </p>

        {session ? (
          <>
            <form className="flex flex-col" onSubmit={submitData}>
              <h1 className="mb-2 font-semibold text-lg">New Draft</h1>
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
          {props.feed.map((post) => (
            <div key={post.id} className="">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default Guestbook
