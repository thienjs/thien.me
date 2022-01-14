import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const TestPage: NextPage = () => {
  const { data: session } = useSession()
  console.log(session);
  
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {session ? (
          <>
          <div className={styles.user}>
          <h1>Signed in as {session.user?.name}</h1>
          {session.user?.image ? (
            <img src={session.user.image} alt="" />
          ):('')}
          </div>
          <button className={styles.btn} onClick={()=>signOut()}>Signout</button>
          </>
        ):(<>
        <h1>Sign in to continue</h1>
        <button className={styles.btn} onClick={()=>signIn()}>Signin</button>
        </>)}
        
        
      </main>

      
    </div>
  )
}

export default TestPage