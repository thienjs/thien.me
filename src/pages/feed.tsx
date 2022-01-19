import React from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import Layout from "../components/ui/Layout";
import Post, { PostProps } from "../components/Post";
import {prisma }from '../lib/prisma'

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
  });
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Feed: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>

    </Layout>
  )
}

export default Feed