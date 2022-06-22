import * as React from 'react'

import { FaGoogle, FaGithub } from 'react-icons/fa'
import { signIn, useSession } from 'next-auth/react'
export interface IAuthButtonsProps {}

export function LoginButtons(props: IAuthButtonsProps) {
  const { data: session } = useSession()
  const buttons = React.useMemo(
    () => [
      {
        label: 'Github',
        icon: <FaGithub aria-hidden className="h-5 w-5" />,
        handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()
          signIn('github')
        },
      },
      {
        label: 'Google',
        icon: <FaGoogle aria-hidden className="h-5 w-5" />,
        handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()
          signIn('google')
        },
      },
    ],
    []
  )
  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-sm dark:text-neutral-300">
        Login to write a message
      </h2>
      <div className="mt-2 flex items-center space-x-3">
        {buttons.map(({ label, icon, handler }) => (
          <div
            key={label}
            className="w-full rounded-md bg-neutral-100 p-2 ring-gray-300 transition-all hover:ring-2 dark:bg-zinc-800"
          >
            <button
              className="flex w-full flex-col items-center justify-center py-2"
              onClick={handler}
            >
              {icon}
              <div className="dark:text-neutral-300">{label}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
