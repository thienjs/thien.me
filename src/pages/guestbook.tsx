import type { InferGetStaticPropsType } from 'next';
import  Layout  from '~/components/ui/Layout';
import { ContentPopover } from '~/components/guestbook';
import { fetchGuestbookEntries } from '~/lib/queries';
import { GuestbookContent } from '~/components/guestbook';
import Title from '~/components/ui/typography/Title'
import { motion } from 'framer-motion';

export const getStaticProps = async () => {
  const data = await fetchGuestbookEntries();

  const entries = data.map((entry) => ({
    id: entry.id,
    body: entry.body,
    createdBy: entry.createdBy.toString(),
    createdAt: entry.createdAt.toString(),

  }))
  return {
    props: { entries, revalidate: 60 } //revalidate every minute
  };
};

const GuestBookPage = ({
  entries
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Title>
        Guestbook
      </Title>
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: {
              opacity: .5,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }} className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm font-serif">
          Thank you for visiting. Say hi!
        </motion.div>
      </div>
      <ContentPopover />
      <GuestbookContent data={entries} />
    </Layout>
  )
};

export default GuestBookPage;
