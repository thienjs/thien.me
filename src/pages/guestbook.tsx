import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import { useThemeContext } from '~/hooks/useTheme'

import React from 'react'
import type {
  GetStaticProps,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from 'next'

import { getMessages } from '~/lib/notion'
import axios from 'axios'

import { Title, Description } from '~/components/ui/typography'

const GuestbookPage = ({ guestbooks }) => {
  const { systemTheme, setTheme } = useThemeContext()
  // Input states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/notion-guestbook', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
    // Success if status code is 201
    if (res.status === 201) {
      toast(
        'Thank you for your message, please refresh page to see your message!',
        { type: 'success' }
      )
    } else {
      toast('Please re-check your inputs.', { type: 'error' })
    }
  }

  return (
    <>
      <Title>Guestbook</Title>
      <div className="flex items-center justify-center">
        <ToastContainer />
        <form className="w-full max-w-xl" onSubmit={submitForm}>
          <div className=" ">
            <label htmlFor="name" className="mb-2 block text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{
                backgroundColor: systemTheme.background.secondary,
                color: systemTheme.text.secondary,
                borderColor: systemTheme.text.accent,
              }}
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-2 block w-full rounded-md text-sm font-medium"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              style={{
                backgroundColor: systemTheme.background.secondary,
                color: systemTheme.text.secondary,
                borderColor: systemTheme.text.accent,
              }}
              className="mb-2 block w-full rounded-md  text-sm font-medium "
              placeholder="Hi there!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-4 flex items-end justify-end">
            <button
              className="rounded-md border  bg-opacity-60 py-1 px-4 font-mono "
              style={{
                backgroundColor: systemTheme.text.accent,
                color: systemTheme.text.accent2,
                borderColor: systemTheme.text.title,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {guestbooks.map((guestbook) => (
        <div className="my-3 ">
          <span
            className=""
            style={{

              color: systemTheme.text.accent2,

            }}
          >
            {guestbook.name}:{' '}
          </span>
          <span className="">{guestbook.message}</span>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const guestbooksdata = await getMessages(process.env.NOTION_GUESTBOOK_DB_ID)

  const guestbooks = guestbooksdata.map((guestbook: any) => ({
    id: guestbook.id,
    name: guestbook.properties.Name.title[0].plain_text,
    message: guestbook.properties.Message.rich_text[0]?.plain_text,
  }))
  return {
    props: {
      guestbooks,
    },
  }
}
export default GuestbookPage
