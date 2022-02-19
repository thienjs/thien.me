//from leerob.io
import Layout from '~/components/ui/Layout';
import Tweet from '~/components/cards/Tweet';
import { getTweets } from 'lib/twitter';
import Title from '~/components/ui/typography/Title';

export default function Tweets({ tweets }) {
  return (
    <Layout
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Title>
          Tweets
        </Title>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm">
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
    '1494760832651210754',
    '1136983176167821313',
  ]);

  return { props: { tweets } };
}