import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/ui/Layout'
import { useMessage } from '~/lib/message'
import Projects from '~/components/Projects'
import Skills from '~/components/Skills'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Hero from '~/components/Hero'
const IndexPage: NextPage<NextAppPageProps> = ({}) => {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <Hero />
      <Projects/>
      <Skills/>
    </Layout>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  meta: {
    title: 'Thien Tran - FullStack Developer'
  }
}