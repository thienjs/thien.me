import { useAuth } from '~/lib/auth'
import { prisma } from '~/lib/prisma';
import { Feedback, FeedbackType } from '@prisma/client';
import styles from '~/styles/guestbook.module.css'
import { motion } from 'framer-motion'

export default function Guestbook() {
  const {
    user, // The logged-in user object
    loading, // loading state
    signOut, // and a method to let the logged-in user sign out
    signIn,
    signInWithProvider
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
