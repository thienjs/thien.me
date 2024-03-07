import type { InferGetStaticPropsType } from 'next'
import { ContentPopover } from '~/components/guestbook'
import { fetchGuestbookEntries } from '~/lib/queries'
import { GuestbookContent } from '~/components/guestbook'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'

export const getStaticProps = async () => {
  const data = await fetchGuestbookEntries()

  const entries = data.map((entry) => ({
    id: entry.id,
    body: entry.body,
    createdBy: entry.createdBy.toString(),
    createdAt: entry.createdAt.toString(),
  }))
  return {
    props: { entries, revalidate: 60 }, //revalidate every minute
  }
}

const GuestBookPage = ({
  entries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Title>Guestbook</Title>
      <div>
        <Description>Sorry guestbook is currently down.</Description>
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
        <ContentPopover />
        <GuestbookContent data={entries} />
      </motion.div>
    </>
  )
}

export default GuestBookPage