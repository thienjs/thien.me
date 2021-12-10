import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/ui/Layout'
import { useMessage } from '~/lib/message'
import Projects from '~/components/Projects'
import Skills from '~/components/Skills'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
const IndexPage: NextPage<NextAppPageProps> = ({}) => {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <h1>hello</h1>
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