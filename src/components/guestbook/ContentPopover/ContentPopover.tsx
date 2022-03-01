import { Popover } from '@headlessui/react'
import { useSession } from 'next-auth/react'
import { getProviders, signIn } from 'next-auth/react'
import * as React from 'react'
import { FiDivide, FiX } from 'react-icons/fi'
import { RiQuillPenLine } from 'react-icons/ri'

import { AuthButtons } from './AuthButtons'
import { ContentInput } from './ContentInput'

export interface IContentPopoverProps {}
export function ContentPopover(props: IContentPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { data: session, status } = useSession()
  return (
    <div className=" my-2 min-w-[380px] max-w-3xl rounded-md border border-gray-100  bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
      <div>
        <div className=" w-full">
          {status === 'authenticated' ? <ContentInput /> : <AuthButtons />}
        </div>
      </div>
    </div>
  )
}
