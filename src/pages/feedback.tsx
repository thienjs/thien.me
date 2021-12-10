import Head from 'next/head';
import { prisma } from '~/lib/prisma';
import { Feedback, FeedbackType } from '@prisma/client';
import Link from 'next/link';
import Layout from '~/components/ui/Layout'

export default function FeedbackPage({ feedback }) {
  const formatFeedbackType = (feedback: FeedbackType) => {
    switch (feedback) {
      case 'FEEDBACK':
        return 'bg-green-500 text-green-800';
      case 'IDEA':
        return 'bg-yellow-300 text-yellow-800';
      case 'ISSUE':
        return 'bg-red-400 text-red-800';
    }
  };
  return (
    <Layout>
      <main className="my- my-36 h-auto">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h1 className="text-3xl mb-5 font-bold tracking-wide text-white">
            Feedback
          </h1>
          <section className="flex flex-col  ">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-800 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-800 ">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Message
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Feedback Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-700 divide-y divide-gray-500">
                      {feedback.map((item: Feedback) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            <a href={`mailto:${item.email}`}>{item.email}</a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white truncate">
                            <Link href={`/feedback/${item.id}`}>
                              {item.message}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap capitalize">
                            <span
                              className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${formatFeedbackType(
                                item.feedbackType
                              )}`}
                            >
                              {item.feedbackType.toLowerCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const feedback = await prisma.feedback.findMany({
    select: {
      message: true,
      id: true,
      feedbackType: true,
      name: true,
      email: true,
    },
  });

  console.log(feedback);
  return {
    props: {
      feedback,
    },
  };
};