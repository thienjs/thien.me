//from leerob.io
import Layout from '~/components/ui/Layout';
import Tweet from '~/components/Tweet';
import { getTweets } from 'lib/twitter';

export default function Tweets({ tweets }) {
  return (
    <Layout
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A social media platform I want to get back into. 
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1189444653059174401',
  ]);

  return { props: { tweets } };
}