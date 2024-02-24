import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from '~/lib/classNames'
import Tracks from '../music/TopTracks'
import { useThemeContext } from '~/hooks/useTheme';

export default function MediaTabs() {
  const { systemTheme, setTheme } = useThemeContext();
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-md bg-zinc-300 p-1 dark:bg-zinc-700">
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-200',
              'focus:outline-none',
              selected
                ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-white dark:text-gray-400'
            )
          }
        >
          Recent
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-200',
              'focus:outline-none',
              selected
                ? ''
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-white dark:text-gray-400'
            )
          }
          style={{ color: systemTheme.text.secondary }}
        >
          Featured
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-200',
              'focus:outline-none',
              selected
                ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-white dark:text-gray-400'
            )
          }
        >
          Popular
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Tracks />
        </Tab.Panel>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel></Tab.Panel>
      </Tab.Panels>
      <div className="mt-4 mr-2 flex justify-end"></div>
    </Tab.Group>
  )
}
