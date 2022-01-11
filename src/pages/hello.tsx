import { Layout } from '~/components/ui/Layout'
import { Guestbook } from '~/components/guestbook'
import { prisma } from '~/lib/prisma'
export default function Hello({ fallbackData }) {
  return (
    <Layout>
        <Guestbook fallbackData={fallbackData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}