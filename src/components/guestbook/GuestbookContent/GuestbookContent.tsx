import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import * as React from 'react'

import { useGuestbookEntries } from '~/lib/hooks/useGuestbookEntries'
export interface IGuestBookContentProps {
  data: {
    id: number
    body: string
    createdBy: string
    createdAt: string
  }[]
}

export function GuestbookContent({ data }: IGuestBookContentProps) {
  const { data: user } = useSession()
  const { data: entries, mutate } = useGuestbookEntries(data)

  const deleteEntry = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault()
    const filteredEntries = entries?.data.filter((entry) => entry.id !== id)
    mutate({ success: true, data: filteredEntries as any }, false)
    await fetch(`/api/guestbook/delete/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div className="mt-4 space-y-8">
      <div className="">
        {entries?.data &&
          entries.data.map((entry) => (
            <div key={entry.id}>
              <div className="">
                <div className="my-2 w-full rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                  <div className="mb-2 font-serif text-neutral-900 dark:text-neutral-300 ">
                    {entry.body}
                  </div>
                  <div className="line-clamp-1 text-gray-600 text-opacity-80 dark:text-white">
                    <div className="mb-2 flex ">
                      <p className="text-xs text-gray-500">
                        {entry.createdBy} •{' '}
                        {format(
                          new Date(entry.createdAt),
                          "d MMM yyyy 'at' h:mm bb"
                        )}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {user && entry.createdBy === user.user.name && (
                        <button
                          aria-label="delete comment"
                          className="text-sm text-red-600 dark:text-red-400 "
                          onClick={(e) => deleteEntry(e, entry.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
