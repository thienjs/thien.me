import NextLink from 'next/link'
import Layout from '~/components/ui/Layout'
import ContactLink from '~/components/contact/ContactLink'
import { FaTwitter } from 'react-icons/fa'
import Title from '~/components/ui/typography/Title'
const Contact = () => {
  return (
    <Layout>
      <Title>Contact</Title>
      <ul className="font-semi-bold flex flex-col ">
        <ContactLink
          href="mailto:thienjsx@gmail.com"
          title="gmail"
          icon="thienjsx"
        />
        <ContactLink
          href="https://github.com/thienjs"
          title="github"
          icon="thienjs"
        />
        <ContactLink
          href="https://twitter.com/thientsx"
          title="twitter"
          icon="thientsx"
        />
      </ul>
    </Layout>
  )
}

export default Contact
