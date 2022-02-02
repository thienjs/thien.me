import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { FiX } from 'react-icons/fi';
import { AuthButtons } from './AuthButtons';
import { ContentInput } from './ContentInput';
import { useSession } from 'next-auth/react';
import { getProviders, signIn } from 'next-auth/react';
import { Popover } from '@headlessui/react'
import {RiQuillPenLine} from 'react-icons/ri'

export interface IContentPopoverProps {}
export function ContentPopover(props: IContentPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  return (
    <div className=" max-w-3xl px-4 py-4 bg-white dark:bg-zinc-900 w-full  border my-2 rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
      <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl ">
        Share a message for future visitors of my site.
      </h5>

      <Popover>
        <Popover.Button className="my-4 rounded bg-gray-300  px-4 py-2 font-bold text-gray-900 dark:bg-gray-700 dark:text-gray-100">
          <RiQuillPenLine/>
        </Popover.Button>

        <Popover.Panel className="absolute w-96 rounded-md border border-gray-300 dark:border-zinc-800 bg-gray-50 p-5 shadow-sm dark:shadow-zinc-800  dark:bg-zinc-900">
          {status === 'authenticated' ? <ContentInput /> : <AuthButtons />}

          <Popover.Button
            aria-label="Close"
            className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX className="h-4 w-4" aria-hidden />
          </Popover.Button>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
