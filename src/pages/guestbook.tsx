import React from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import Layout from "../components/ui/Layout";
import Post, { PostProps } from "../components/Post";
import {prisma }from '../lib/prisma'
import ButtonLink from "~/components/links/ButtonLink";

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
  return (
    <Layout>
      <div className="">
        <h1 className="text-3xl font-semibold mt-4">Guestbook</h1>
        <p className="text-sm mt-2 mb-4">
          leave a comment, feedback, suggestions for others to see in the
          future.
        </p>
        <div className="">
          <ButtonLink href="/create">New Post</ButtonLink>
        </div>
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