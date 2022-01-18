import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '~/components/ui/Layout'
import Router from 'next/router'
import { PostProps } from '~/components/Post'
import {prisma} from '~/lib/prisma'
import { useSession } from 'next-auth/react'
import { DividerHorizontalIcon } from '@radix-ui/react-icons'
import { basePath } from "~/utils/config";

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
  await fetch(`${basePath}/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/')
}

async function deletePost(id: number): Promise<void> {
  await fetch(`${basePath}/api/post/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/')
}
