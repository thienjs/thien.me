import * as React from 'react';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useGuestbookEntries } from '~/lib/hooks/useGuestbookEntries';
export interface IGuestBookContentProps {
  data: {
    id: number;
    body: string;
    createdBy: string;
    createdAt: string;

  }[];
}

export function GuestbookContent({ data }: IGuestBookContentProps) {
  const { data: user } = useSession();
  const { data: entries, mutate } = useGuestbookEntries(data);

  const deleteEntry = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    const filteredEntries = entries?.data.filter((entry) => entry.id !== id);
    mutate({ success: true, data: filteredEntries as any }, false);
    await fetch(`/api/guestbook/delete/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <div className="mt-4 space-y-8">
      <div className="">
        {entries?.data &&
          entries.data.map((entry) => (
            <div key={entry.id}>
              <div className="">
                <div className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
                  <div className="text-base  font-medium ">{entry.body}</div>
                  <div className="text-gray-600 text-opacity-80 line-clamp-1 dark:text-white">
                    <div className="mb-2 flex items-center space-x-2">
                      <p className="text-sm text-gray-500">
                        {entry.createdBy} • {' '}
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
  );
}
