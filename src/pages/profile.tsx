import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Layout } from '~/components/ui'
import Title from '~/components/ui/typography/Title'

const TestPage: NextPage = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <>
      <main className="">
        {session ? (
          <>
            <h1 className="mb-4 text-xl ">Signed in</h1>
            <div className="mx-80 mb-4 ml-8 min-w-full items-center rounded-md  border  border-gray-200 bg-gray-100 px-4 py-4 dark:border-gray-800  dark:bg-zinc-900">
              {session.user?.image ? (
                <img
                  className="m-6 h-20 w-20 rounded-full"
                  src={session.user.image}
                  alt=""
                />
              ) : (
                ''
              )}
              <Title>{session.user?.name}</Title>
            </div>
            <button className="text-center" onClick={() => signOut()}>
              Signout
            </button>
          </>
        ) : (
          <>
            <h1>Sign in to continue</h1>
            <button className="" onClick={() => signIn()}>
              Signin
            </button>
          </>
        )}
      </main>
    </>
  )
}

export default TestPage
