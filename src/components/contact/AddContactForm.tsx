import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import Input from './Input'
import InputSpacer from './InputSpacer'

const FormError = ({ errorMessage }) => {
  return <p className="mt-1 text-red-300">{errorMessage}</p>
}

interface AddContactFormProps {
  onSubmit: any
}
type FormValues = {
  key1: string
  key2: number
}

export default function AddContactForm(props: AddContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm()

  const create = async (data) => {
    try {
      fetch('./api/contacts', {
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
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>{}</InputSpacer>
      <InputSpacer>{}</InputSpacer>
      <InputSpacer>{}</InputSpacer>
      <InputSpacer>
        <div className="relative">
          <input
            {...register('name', { required: true })}
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            className={`mb-2 block w-full rounded-md border-gray-700 bg-[#131415] py-3 px-4 text-white  placeholder-gray-500 shadow-sm ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:border-blue-500 focus:ring-blue-500'
            }`}
            placeholder="Full name"
          />
          {errors.name && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-600"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </InputSpacer>

      <button
        className="rounded-md bg-blue-500 p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
