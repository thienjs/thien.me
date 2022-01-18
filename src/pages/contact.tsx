import { useState } from 'react';
import Head from 'next/head';
import AddContactForm from './../components/contact/AddContactForm';
import ContactCard from './../components/contact/ContactCard';
import Layout from '~/components/ui/Layout'

import { PrismaClient, Contact, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany()
  return {
    props: {
      initialContacts: contacts,
    },
  }
}

async function saveContact(contact: Prisma.ContactCreateInput) {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export default function Index({ initialContacts }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  return (
    <Layout>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
          <AddContactForm
            onSubmit={async (data, e) => {
              try {
                await saveContact(data)
                setContacts([...contacts, data])
                e.target.reset()
              } catch (err) {
                console.log(err)
              }
            }}
          />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((c, i: number) => (
            <div className="mb-3" key={i}>
              <ContactCard contact={c} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}