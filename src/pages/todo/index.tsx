import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'
import { useMessage } from '~/lib/message'
import { useFormFields } from '~/lib/utils'
import { supabase } from '~/lib/supabase'
import Spinner from '~/components/Spinner'
import { useState } from 'react'

// define the shape of the SignUp form's fields
type SignUpFieldProps = {
  email: string
  password: string
}

// the value we'd like to initialize the SignUp form with
const FORM_VALUES: SignUpFieldProps = {
  email: '',
  password: '',
}

type SupabaseSignupPayload = SignUpFieldProps // type alias
const IndexPage: NextPage<NextAppPageProps> = ({}) => {
  const [loading, setLoading] = useState(false)
  const { handleMessage } = useMessage()
  const [values, handleChange] = useFormFields<SignUpFieldProps>(FORM_VALUES)

  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center items-center relative">
        {/* App logo and tagline*/}
        <div className="w-full text-center mb-4 flex  flex-col place-items-center">
          <div>
            <FaLock className="text-gray-600 text-5xl shadow-sm" />
          </div>
          <h3 className="text-3xl text-gray-600">
            Supa<strong>Auth</strong>
          </h3>
          <small>
            Please provide your <strong>email</strong> and{' '}
            <strong>password</strong> and sign up
          </small>
        </div>

        {/* Sign Up form  */}
        <form className="w-full sm:w-1/2 xl:w-1/3">
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg dark:bg-zinc-800">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400 dark:bg-zinc-600"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-semibold text-gray-800 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400 dark:bg-zinc-600"
                placeholder="Your password"
                required
              />
            </div>

            {/*  Sign Up form: Actions */}

            <div className="flex pt-4 gap-2">
              <button
                type="submit"
                className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
                onClick={(evt) => {
                  evt.preventDefault()
                  handleMessage({
                    message: `will sign up with ${values.email}`,
                    type: 'success',
                  })
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  meta: {
    title: 'SupaAuth - Sign Up',
  },
}
