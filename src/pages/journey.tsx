import Timeline from '~/components/timeline/Timeline'
import Layout from '~/components/ui/Layout'

export default function JourneyPage() {
  return (
    <Layout>
      <h2 className="text-lg font-semibold">My coding journey</h2>
      <p className="mb-6">
        'dont compare yourself to others. make progress everyday.'
      </p>
      <Timeline />
    </Layout>
  )
}
