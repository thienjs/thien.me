import Head from 'next/head';
import { prisma } from '~/lib/prisma';
import { Feedback, FeedbackType } from '@prisma/client';
import Link from 'next/link';

import { SpinnerFullPage } from '~/components/Spinner'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import toast, { Toaster } from 'react-hot-toast'
import Layout from '~/components/ui/Layout'

export default function FeedbackPage({ feedback }) {

  const formatFeedbackType = (feedback: FeedbackType) => {
    switch (feedback) {
      case 'FEEDBACK':
        return 'bg-green-500 text-green-800'
      case 'IDEA':
        return 'bg-yellow-300 text-yellow-800'
      case 'ISSUE':
        return 'bg-red-400 text-red-800'
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm()

  const create = async (data) => {
    try {
      fetch('./api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
    } catch (error) {
      throw new Error(error)
    }
  }
  const onSubmit = async (data) => {
    try {
      toast.promise(
        create(data),
        {
          loading: 'Working on it...',
          success: 'Feedback submitted successfully!',
          error: 'Oops! something went wrong.',
        },
        {
          duration: 3000,
        }
      )
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <Layout>
      <Toaster />

      <h1 className="text-5xl font-bold py-4 text-transparent bg-clip-text mb-4 bg-gradient-to-br from-green-200 via-teal-500 to-purple-700 ">
        Feedback
      </h1>
      <p className="mb-4">let me know what you think about the site.</p>
      <main className=" h-auto">
        <div className="container mx-auto max-w-screen-lg ">
          <section className="flex flex-col  ">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-6">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-800 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-800 ">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Message
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                          Feedback Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-700 divide-y divide-gray-500">
                      {feedback.map((item: Feedback) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            <a href={`mailto:${item.email}`}>{item.email}</a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white truncate">
                            <Link href={`/feedback/${item.id}`}>
                              {item.message}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap capitalize">
                            <span
                              className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ${formatFeedbackType(
                                item.feedbackType
                              )}`}
                            >
                              {item.feedbackType.toLowerCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <h1 className=" text-3xl md:text-4xl text-white tracking-wide mb-10 ">
          Submit Your Feedback!
        </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-6 shadow-lg p-10 bg-[#131415] rounded-lg"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <div className="relative">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className={`block w-full shadow-sm py-3 text-white px-4 mb-2 bg-[#131415] placeholder-gray-500  border-gray-700 rounded-md ${
                    errors.name
                      ? 'focus:ring-red-500 border-red-500'
                      : 'focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Full name"
                />
                {errors.name && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                {...register('email', { required: true })}
                type="email"
                autoComplete="email"
                className={`block w-full shadow-sm py-3 text-white px-4 mb-2 bg-[#131415] placeholder-gray-500   border-gray-700 rounded-md ${
                  errors.name
                    ? 'focus:ring-red-500 border-red-500'
                    : 'focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <div className="absolute inset-y-0 right-0 pb-2 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Feedback Type
              </label>
              <select
                id="feedbackType"
                name="feedbackType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-[#131415] placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="FEEDBACK"
                {...register('feedbackType', { required: true })}
              >
                <option>feedback</option>
                <option>issue</option>
                <option>idea</option>
              </select>
            </div>
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                {...register('message', { required: true })}
                rows={4}
                className={`block w-full shadow-sm py-3 text-white px-4 mb-2 bg-[#131415] placeholder-gray-500   border-gray-700 rounded-md ${
                  errors.name
                    ? 'focus:ring-red-500 border-red-500'
                    : 'focus:ring-blue-500 focus:border-blue-500'
                }`}
                placeholder="Message"
                defaultValue={''}
              />
              {errors.message && (
                <div className="absolute top-3 right-0 pb-2 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-600"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
            <div>
              <motion.button
                disabled={isSubmitted}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
                type="submit"
                className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </motion.button>
            </div>
    
          </form>


      </main>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const feedback = await prisma.feedback.findMany({
    select: {
      message: true,
      id: true,
      feedbackType: true,
      name: true,
      email: true,
    },
  })

  return {
    props: {
      feedback,
    },
  }
}