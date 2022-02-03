import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { FiDivide, FiX } from 'react-icons/fi'
import { AuthButtons } from './AuthButtons'
import { ContentInput } from './ContentInput'
import { useSession } from 'next-auth/react'
import { getProviders, signIn } from 'next-auth/react'
import { Popover } from '@headlessui/react'
import { RiQuillPenLine } from 'react-icons/ri'

export interface IContentPopoverProps {}
export function ContentPopover(props: IContentPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { data: session, status } = useSession()
  return (
    <div className=" max-w-3xl min-w-[380px] px-4 py-4 bg-white dark:bg-zinc-900  border my-2 rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
      <div>
        <div className=" w-full">
          {status === 'authenticated' ? <ContentInput /> : <AuthButtons />}
        </div>
      </div>
    </div>
  )
}
