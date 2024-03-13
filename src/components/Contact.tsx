// For handling input states
import { useState } from 'react'

// For display toasts
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Button } from './ui/button'

import { useThemeContext } from '~/hooks/useTheme'

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
    <div className="flex items-center justify-center">
      <ToastContainer />
      <form className="w-full max-w-xl" onSubmit={submitForm}>
        <div className=" ">
          <label htmlFor="name" className="mb-2 block text-sm font-medium ">
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
            className="mb-2 block w-full text-sm font-medium "
          />
        </div>
        <div className="">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-Mail Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.io"
              value={email}
              className="mb-2 block w-full text-sm  font-medium"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium ">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="mb-2 block w-full text-sm  font-medium"
            placeholder="Hi there!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
      <div className="flex items-end justify-end mt-4">
          <Button variant="outline">Submit</Button>
        </div>
      </form>
    </div>
  )
}
