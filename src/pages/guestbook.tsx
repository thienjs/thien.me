import { useAuth } from '~/lib/auth'
import { prisma } from '~/lib/prisma';
import { Feedback, FeedbackType } from '@prisma/client';
import styles from '~/styles/guestbook.module.css'
import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { NextAppPageServerSideProps } from '~/types/app'
import { supabase } from '~/lib/supabase'
import Layout from '~/components/ui/Layout';
import { Guestbook } from '~/components/guestbook/guestbook'
export default function GuestbookPage({ fallbackData }) {
  const {
    user, // The logged-in user object
    loading, // loading state
    signOut, // and a method to let the logged-in user sign out
    signIn,
    signInWithProvider,
  } = useAuth()

  return (
    <Layout>
      <div>
        {user && (
          <div>
            <Guestbook fallbackData={fallbackData} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
              onClick={() => signOut()}
            >
              Sign out
            </motion.button>
          </div>
        )}
        {!user && (
          <div>
            <p>
              Hey <b>you!</b>
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.loginbutton}
              onClick={(evt) => {
                evt.preventDefault()
                signInWithProvider('github')
              }}
            >
              Sign in with Github
            </motion.button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  })

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }))

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  }
}