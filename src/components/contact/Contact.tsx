import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'

const Contact: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let form = {
      name,
      email,
      phone,
      message,
    }

    const rawResponse = await fetch('/api/contact/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const content = await rawResponse.json()

    // print to screen
    alert(content.data.tableRange)

    // Reset the form fields
    setMessage('')
    setPhone('')
    setName('')
    setEmail('')
  }

  return (
    <div className="mx-auto max-w-5xl py-3">
      <form className="space-y-2 py-2" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="sm:text-md block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="sm:text-md block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="phone"
            id="phone"
            className="sm:text-md block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Phone (optional)"
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            className="sm:text-md block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Message"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 py-3 px-2 text-sm text-white shadow"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
