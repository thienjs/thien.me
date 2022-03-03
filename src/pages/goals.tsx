import { quotes } from '~/data'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'
const title = `Goals`
const description = `my goals`

export default function GoalsPage() {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <p>find developer job</p>
     
    </>
  )
}
