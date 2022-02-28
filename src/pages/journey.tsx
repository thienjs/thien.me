import Timeline from '~/components/timeline/Timeline'
import Title from '~/components/ui/typography/Title'

export default function JourneyPage() {
  return (
    <>
      <Title>My coding journey</Title>
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        'dont compare yourself to others. make progress everyday.'
      </p>
      <Timeline />
    </>
  )
}
