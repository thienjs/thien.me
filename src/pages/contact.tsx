import NextLink from 'next/link'
import ContactLink from '~/components/contact/ContactLink'
import { Title, Description  } from '~/components/ui/typography'
const Contact = () => {
  return (
    <>
      <Title>Contact</Title>
      <ul className="font-semi-bold flex flex-col ">
        <ContactLink
          href="mailto:hi@thien.me"
          title="thien.me"
          icon="hi"
        />
        <ContactLink
          href="https://github.com/thienjs"
          title="github"
          icon="thienjs"
        />
        <ContactLink
          href="https://discord.gg/thien.tran"
          title="discord"
          icon="thien.tran"
        />
      </ul>
    </>
  )
}

export default Contact
