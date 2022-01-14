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
            <div className="">
              <h1 className="text-xl mb-4">
                Signed in as {session.user?.name}
              </h1>
              {session.user?.image ? (
                <img
                  className="rounded-full h-20 w-20 m-6"
                  src={session.user.image}
                  alt=""
                />
              ) : (
                ''
              )}
            </div>
            <button className="text-center" onClick={() => signOut()}>
              Signout
            </button>
          </>
        ) : (
          <>
            <h1>Sign in to continue</h1>
            <button className={styles.btn} onClick={() => signIn()}>
              Signin
            </button>
          </>
        )}
      </main>
    </Layout>
  )
}

export default TestPage