import NextLink from 'next/link'
import ContactLink from '~/components/contact/ContactLink'
import { Title, Description  } from '~/components/ui/typography'
const Contact = () => {
  return (
    <>
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
    </>
  )
}

export default Contact
