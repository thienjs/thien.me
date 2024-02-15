import type { InferGetStaticPropsType } from 'next'
import { ContentPopover } from '~/components/guestbook'
import { fetchGuestbookEntries } from '~/lib/queries'
import { GuestbookContent } from '~/components/guestbook'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'



const GuestBookPage = () => {
  return (
    <>
      <Title>Guestbook</Title>
      <div>
        <Description>Thank you for visiting. Say hi!</Description>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.8 }}
        variants={{
          hidden: {
            opacity: 0.5,
            y: 10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        <p>hello</p>
      </motion.div>
    </>
  )
}

export default GuestBookPage
