import LoadingSpinner from '~/components/ui/common/LoadingSpinner'
import clsx from 'clsx'
import * as React from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { signOut } from 'next-auth/react'
import toast from 'react-hot-toast'
import { BiFullscreen } from 'react-icons/bi'

export enum Form {
  Initial,
  Loading,
}
export type FormState = Form

export function ContentInput() {
  const [form, setForm] = React.useState<FormState>(Form.Initial)
  const inputEl = React.useRef<HTMLTextAreaElement>(null)
  const { mutate } = useSWRConfig()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setForm(Form.Loading)
    if (!inputEl.current) return
    const req = await fetch('/api/guestbook/sign', {
      body: JSON.stringify({
        message: inputEl?.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const res = await req.json()
    if (res.success) {
      inputEl.current.value = ''
      mutate('/api/guestbook/all')
      toast.success('Hooray! Thanks for signing my Guestbook.')
    }
    if (!res.success) {
      toast.error(res.message)
    }
    setForm(Form.Initial)
  }
  return (
    <div className="flex flex-col ">
      <form
        className="flex flex-col items-center space-y-3"
        onSubmit={onSubmit}
      >
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          className="w-full rounded-md border border-gray-300 text-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
          ref={inputEl}
          rows={3}
          aria-label="Your message"
          placeholder="Your message..."
          required
          id="message"
          disabled={form === Form.Loading ? true : false}
          maxLength={500}
        />
        <button
          type="submit"
          disabled={form === Form.Loading ? true : false}
          className={clsx(
            'w-full rounded bg-gray-200 px-3 py-1 font-medium dark:bg-gray-600 ',
            form === Form.Loading
              ? 'cursor-not-allowed'
              : 'ring-gray-300 transition-all hover:ring-2'
          )}
        >
          {form === Form.Loading ? (
            <>
              <LoadingSpinner /> loading{' '}
            </>
          ) : (
            'Sign'
          )}
        </button>
      </form>
    </div>
  )
}
