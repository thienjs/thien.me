import  {useState} from 'react'
import Layout from '~/components/ui/Layout';
import {useAccordion } from 'thien-ui'
import Button from '~/components/button/ButtonBNW';
import Alert from '~/components/ui/Alert'
import Timeline from '~/components/Timeline'
import Avatar from '~/components/ui/Avatar'
import SkillsTable from '~/components/SkillsTable';
import SnapCarousel from '~/components/ui/SnapCarousel';
import Experience from '~/components/Experience';
import DiscordStatus from '~/components/DiscordStatus'
import ButtonBox from '~/components/button/ButtonBNW'
import Pomodoro from '~/components/clock/Pomodoro'

import Tracks from '~/components/Tracks'
const accordionData = [
  { title: <>Title 1</>, content: <>content 1</> },
  { title: <>Title 2</>, content: <>content 2</> },
  { title: <>Title 3</>, content: <>content 3</> },
]
export default function thien() {
  const { accordion = [] } = useAccordion({
    data: accordionData,
  })
  const [presenceActive, setPresenceActive] = useState(false)
  return (
    <Layout>
      <div className="flex flex-col w-full h-6 align-center justify-center">
        {accordion.map(({ title, content, trigger, isExpanded }, index) => (
          <div className="mb-2 p-1 border" key={index}>
            <div className="w-full flex justify-between align-center ">
              <p>{title}</p>
              <button {...trigger(index)}>{isExpanded ? '-' : '+'}</button>
            </div>
            {isExpanded && (
              <div className="bt-1 border-red-400 p-1">{content}</div>
            )}
          </div>
        ))}
      </div>
      <Pomodoro />


      <Alert />
      <Timeline />
      <Avatar />
      <SkillsTable />
      <SnapCarousel />
      <Experience />
      <DiscordStatus />

      <Tracks />
      <ButtonBox label="test" href="/" />
    </Layout>
  )
}
