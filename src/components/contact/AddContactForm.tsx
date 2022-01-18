import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';
import toast, { Toaster } from 'react-hot-toast'

import { ExclamationCircleIcon } from '@heroicons/react/solid'

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>
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
      <InputSpacer>

      </InputSpacer>
      <InputSpacer>

      </InputSpacer>
      <InputSpacer>

      </InputSpacer>
      <InputSpacer>
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
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}