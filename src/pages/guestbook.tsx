import type { InferGetStaticPropsType } from 'next';
import  Layout  from '~/components/ui/Layout';
import { ContentPopover } from '~/components/guestbook';
import { fetchGuestbookEntries } from '~/lib/queries';
import { GuestbookContent } from '~/components/guestbook';

export const getStaticProps = async () => {
  const data = await fetchGuestbookEntries();

  const entries = data.map((entry) => ({
    id: entry.id,
    body: entry.body,
    createdBy: entry.createdBy.toString(),
    createdAt: entry.createdAt.toString()
  }));
  return {
    props: { entries, revalidate: 60 } //revalidate every minute
  };
};

const GuestBookPage = ({
  entries
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-white md:text-5xl">
        Guestbook
      </h1>
      <div>
        <p className="mb-4 max-w-lg text-gray-600 dark:text-gray-400">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
      </div>
      <ContentPopover />
      <GuestbookContent data={entries} />
    </Layout>
  )
};

export default GuestBookPage;
