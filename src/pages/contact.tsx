import Layout from '~/components/ui/Layout'
import React, { ChangeEvent, useState } from 'react'
const Contact = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if (!name && !mail && !message) {
      setError('Please fill in all the fields')
    } else if (!name) {
      setError('Please fill in your name')
    } else if (!mail) {
      setError('Please fill in your email')
    } else if (!message) {
      setError('Please fill in your message')
    } else {
      setSuccess('Your message has been sent successfully')
    }
    if (name && mail && message) {
      window.open(
        `mailto:hi@thien.me?body=${encodeURIComponent(
          `[Mail] \n\n Name: ${name} \n Mail: ${mail} \n\n${message}`
        )}`
      )
      setLoading(false)
    }
  }
  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto bg-white">
        {error && (
          <div className="animate-BounceIn bg-white">
            <div className="flex items-center text-white max-w-sm w-full bg-red-400 shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="w-10 border-r px-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center px-2 py-3 ">
                <div className="mx-3">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {success && (
          <div className="animate-BounceIn">
            <div className="flex items-center text-white max-w-sm w-full bg-green-400 shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="w-10 border-r px-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center px-2 py-3">
                <div className="mx-3">
                  <p>{success}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <form method="POST" onSubmit={onSubmit}>
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMail(e as any)
                }
                className="block w-full px-4 py-3 leading-tight text-neutral-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-neutral-900 bg-neutral-900 hover:bg-neutral-800 dark:text-white focus:outline-none dark:focus:bg-neutral-900 dark:bg-opacity-60 dark:placeholder-white"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-1/2 px-2">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e as any)
                }
                className="block w-full px-4 py-3 leading-tight text-neutral-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-neutral-900 bg-neutral-900 hover:bg-neutral-800 dark:text-white focus:outline-none dark:focus:bg-neutral-900 dark:bg-opacity-60 dark:placeholder-white"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e as any)
              }
              className="block w-full px-4 py-3 leading-tight text-neutral-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-neutral-900 bg-neutral-900 hover:bg-neutral-800 dark:text-white focus:outline-none dark:focus:bg-neutral-900 dark:bg-opacity-60 dark:placeholder-white"
              placeholder="Write something..."
              rows={5}
            />
          </div>
          <div className="inline-flex items-center justify-center mb-1">
            <button
              type="submit"
              className="inline-block px-5 py-2 m-0 font-semibold text-neutral-50 transition rounded-md bg-neutral-900 hover:bg-neutral-800 dark:bg-warmneutral-200 dark:hover:bg-neutral-800 duration-150 dark:text-white"
            >
              {loading ? (
                <div className="inline-block mx-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 80 80"
                    className="inline mb-0.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="inline-block mx-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 80 80"
                    className="inline mb-0.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              <p>send</p>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact