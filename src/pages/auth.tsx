import { useState } from 'react'
import { NextPage } from 'next'
import { FaLock, FaGithub } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/ui/Layout'
import Spinner from '~/components/Spinner'
import { useFormFields } from '~/lib/utils'
import { useAuth } from '~/lib/auth'

type SignUpFieldProps = {
  email: string
  password: string
}

const FORM_VALUES: SignUpFieldProps = {
  email: '',
  password: '',
}

const AuthPage: NextPage<NextAppPageProps> = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const { loading, signIn, signUp, signInWithProvider } = useAuth()
  // Now since we have our form ready, what we're gonna need for signing up our users
  // 1. let users provide email and password
  const [values, handleChange, resetFormFields] =
    useFormFields<SignUpFieldProps>(FORM_VALUES)
  // 2. send the provided details to Supabase

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault()
    isSignIn ? await signIn(values) : await signUp(values)
    resetFormFields()
  }

  return (
    <Layout>
      <div className="  ">
        {/* App logo and tagline*/}
        <div className="w-full text-center mb-4 flex  flex-col place-items-center mt-24">

          <small>
            Please provide your <strong>email</strong> and{' '}
            <strong>password</strong> and {isSignIn ? 'Log In' : 'Sign Up'}
          </small>
        </div>

        {/* Sign Up form --> */}
        <form className="w-full " onSubmit={handleSumbit}>
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg  dark:bg-zinc-700">
            <button
              onClick={(evt) => {
                evt.preventDefault()
                signInWithProvider('github')
              }}
              className="flex-1 bg-gray-200 dark:bg-zinc-600 text-gray-700 dark:text-gray-200 py-3 rounded w-full text-center shadow"
            >
              <FaGithub className="inline-block text-2xl" />{' '}
              {isSignIn ? 'Log In' : 'Sign Up'} with <strong>Github</strong>
            </button>
            <hr className="my-4" />
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block  text-gray-800 mb-2 dark:text-gray-100"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
                placeholder="Your Email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block  text-gray-800 mb-2 dark:text-gray-50"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400 text-xs"
                placeholder="password. leave empty code email"
                value={values.password}
                onChange={handleChange}
              />
            </div>

            {/* <!-- Sign Up & Sign In form: Actions --> */}

            <div className="flex pt-4 gap-2 bg-white dark:bg-zinc-700">
              <button
                type="submit"
                className="flex-1 bg-gray-300 border border-gray-600 text-gray-700 py-3 rounded w-full text-center shadow font-bold"
              >
                {isSignIn ? 'Log In' : 'Sign Up'}
              </button>
              <div className="flex-1 text-right">
                <small className="block text-gray-600 dark:text-gray-100">
                  {isSignIn ? 'Not a member yet?' : 'Already a member?'}{' '}
                </small>
                <a
                  className="block font-semibold text-gray-700 dark:text-gray-200"
                  href=""
                  onClick={(e) => {
                    e.preventDefault()
                    setIsSignIn(!isSignIn)
                  }}
                >
                  {isSignIn ? 'Sign Up' : 'Log In'}
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="h-12 w-12 relative">{loading && <Spinner />}</div>
      </div>
    </Layout>
  )
}

export default AuthPage

AuthPage.defaultProps = {
  meta: {
    title: 'Sign In',
  },
}