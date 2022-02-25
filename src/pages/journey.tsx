import Timeline from '~/components/timeline/Timeline'
import Layout from '~/components/ui/Layout'
import Title from '~/components/ui/typography/Title'

export default function JourneyPage() {
  return (
    <Layout>
      <Title>My coding journey</Title>
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        'dont compare yourself to others. make progress everyday.'
      </p>
      <Timeline />
    </Layout>
  )
}
