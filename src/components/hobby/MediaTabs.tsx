import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from '~/lib/classNames'
import Tracks from '../music/TopTracks'

export default function MediaTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex p-1 space-x-1 bg-zinc-300 dark:bg-zinc-700 rounded-md">
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
              'focus:outline-none',
              selected
                ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          Recent
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
              'focus:outline-none',
              selected
                ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          Featured
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
              'focus:outline-none',
              selected
                ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          Popular
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Tracks/>
        </Tab.Panel>
        <Tab.Panel>
         
        </Tab.Panel>
        <Tab.Panel>
        
        </Tab.Panel>
      </Tab.Panels>
      <div className="flex justify-end mt-4 mr-2">

      </div>
    </Tab.Group>
  )
}
