import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Layout from '~/components/ui/Layout'

const TestPage: NextPage = () => {
  const { data: session } = useSession()
  console.log(session);
  
  return (
    <Layout>
      <main className="">
        {session ? (
          <>
            <h1 className="text-xl mb-4 ">Signed in</h1>
            <div className="mb-4 ml-8 px-4 py-4 bg-gray-100 dark:bg-zinc-900  border  rounded-md border-gray-200 dark:border-gray-800 min-w-full mx-80  items-center">
              {session.user?.image ? (
                <img
                  className="rounded-full h-20 w-20 m-6"
                  src={session.user.image}
                  alt=""
                />
              ) : (
                ''
              )}
              <p className="">{session.user?.name}</p>
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
    </Layout>
  )
}

export default TestPage