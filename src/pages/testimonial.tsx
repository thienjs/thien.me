import React from 'react'
import type { GetStaticProps } from 'next'
import { useState } from 'react'

import { getMessages } from '~/lib/notion'
import axios from 'axios'

import { Title, Description } from '~/components/ui/typography'

const contactsPage = ({ contacts }) => {
  const [contact, setcontact] = useState(null)

  const handleUpdate = async () => {
    const { data } = await axios.post('/api/mark-as-watched', {
      id: contact.id,
      isWatched: true,
    })

    console.log(data)
  }

  return (
    <>
      <Title>contacts</Title>

      {contacts.map((contact) => (
        <div className="text-start mx-auto my-auto max-w-7xl px-12">
          <p className="text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl">
            {contact.name}
          </p>
          <p className="pl-100 py-2 font-mono">{contact.email}</p>
          <p className="pl-100 py-2 font-mono">{contact.message}</p>
          <p>{contact[0]}</p>
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contactsdata = await getMessages(process.env.NOTION_CONTACT_DB_ID)

  const contacts = contactsdata.map((contact: any) => ({
    id: contact.id,
    name: contact.properties.Name.title[0].plain_text,
    email: contact.properties.Email.email,
    message: contact.properties.Message.message.rich_text.plain_text,
  }))
  return {
    props: {
      contacts,
    },
  }
}
export default contactsPage
