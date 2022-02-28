import Tweet from '~/components/cards/Tweet'
import { getTweets } from 'lib/twitter'
import { Title } from '~/components/ui/typography'

export default function Tweets({ tweets }) {
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <Title>Tweets</Title>
        <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          A social media platform I want to get back into.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const tweets = await getTweets(['1494760832651210754', '1136983176167821313'])

  return { props: { tweets } }
}
