import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { FiX } from 'react-icons/fi';
import { AuthButtons } from './AuthButtons';
import { ContentInput } from './ContentInput';
import { useSession } from 'next-auth/react';
import { getProviders, signIn } from 'next-auth/react';
export interface IContentPopoverProps {}
import { Popover } from '@headlessui/react'

export function ContentPopover(props: IContentPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  return (
    <div className="my-4 w-full rounded border-2  border-gray-300 p-6 dark:border-gray-700 ">
      <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl ">
        Share a message for a future visitor of my site.
      </h5>

      <Popover>

        <Popover.Button className="my-4 rounded bg-gray-200  px-4 py-2 font-bold text-gray-900 dark:bg-gray-700 dark:text-gray-100">
          Sign the Guestbook
        </Popover.Button>

        <Popover.Panel
          className="w-80 rounded-md border border-transparent bg-gray-50 p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900"
        >
          {status === 'authenticated' ? (
            <ContentInput  />
          ) : (
            <AuthButtons />
          )}

          <Popover.Button
            aria-label="Close"
            className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX className="h-4 w-4" aria-hidden />
          </Popover.Button>
        </Popover.Panel>
 
      </Popover>
      <p className="max-w-sm text-sm text-gray-800 dark:text-gray-200">
        Your information is only used to display your name and reply by email.
      </p>
    </div>
  );
}
