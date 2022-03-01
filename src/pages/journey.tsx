import Timeline from '~/components/timeline/Timeline'
import { Title, Description } from '~/components/ui/typography'

export default function JourneyPage() {
  return (
    <>
      <Title>My coding journey</Title>
      <Description>
        'dont compare yourself to others. make progress everyday.'
      </Description>
      <Timeline />
    </>
  )
}
