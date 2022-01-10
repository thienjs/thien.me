import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Auth, Card, Space, Typography } from '@supabase/ui';
import dynamic from 'next/dynamic'
import { prisma } from '~/lib/prisma'
import { todo } from '@prisma/client'
import { GetStaticProps } from 'next'

import { useAuth } from '~/lib/auth'
import { SpinnerFullPage } from '~/components/Spinner'
import { Todo } from '~/types/types'
import { Divide } from 'react-feather'
import Layout from '~/components/ui/Layout'
import ButtonLink from '~/components/links/ButtonLink'

export default function TodoPage({ todolist }) {
  // the absolutely essential methods we'll need from AuthContext
  const {
    user, // The logged-in user object
    loading, // loading state
    signOut, // and a method to let the logged-in user sign out
  } = useAuth()

  if (loading) {
    return <SpinnerFullPage />
  }

  return (
    <Layout>
      <div className="bg-white-300">
        {user && (
          <div>
            {todolist.map((task: Todo) => (
              <>
                <div>{task.id}</div>
                <div>{task.isCompleted}</div>
                <div>{task.text}</div>
              </>
            ))}
          </div>
        )}
        {!user && (
          <div>
            <p>help</p>
          </div>
        )}
        <ButtonLink
          href="/signin"
          openNewTab={false}
          className="bg-white dark:bg-gray-800"
        >
          sign in
        </ButtonLink>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const todolist = await prisma.todo.findMany({
    select: {
      id: true,
      text: true,
      isCompleted: true,
    },
  })
  return {
    props: {
      todolist,
    },
  }
}