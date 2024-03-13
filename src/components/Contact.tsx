// For handling input states
import { useState } from 'react'

// For display toasts
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import styles from '../styles/Home.module.css'

export default function Contact() {
  // Input states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contacts', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
    // Success if status code is 201
    if (res.status === 201) {
      toast('Thank you for contacting us!', { type: 'success' })
    } else {
      toast('Please re-check your inputs.', { type: 'error' })
    }
  }

  return (
    <div className="">
      <ToastContainer />
      <form
        className=" flex flex-col items-center justify-center "
        onSubmit={submitForm}
      >
        <div className="  max-w-md px-8 py-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              E-Mail Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Hi there!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="flex  justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
