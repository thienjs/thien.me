import { useAuth } from '~/lib/auth'
import { prisma } from '~/lib/prisma';
import { Feedback, FeedbackType } from '@prisma/client';
import styles from '~/styles/guestbook.module.css'
import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import { NextAppPageServerSideProps } from '~/types/app'
import { supabase } from '~/lib/supabase'

export default function Guestbook() {
  const {
    user, // The logged-in user object
    loading, // loading state
    signOut, // and a method to let the logged-in user sign out
    signIn,
    signInWithProvider,
  } = useAuth()

  return (
    <div>
      <div>
        {user && (
          <div>
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
        {!user && (
          <div>
            <p>
              Hey <b>!</b>
            </p>
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
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<NextAppPageServerSideProps> => {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  // We can do a re-direction from the server
  if (!user) {
    return {
      props: {
        user,
        loggedIn: !!user,
      },
    }
  }
  // or, alternatively, can send the same values that client-side context populates to check on the client and redirect
  // The following lines won't be used as we're redirecting above
}
