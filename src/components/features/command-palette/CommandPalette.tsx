import { Dialog, Combobox, Transition } from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

import { useRouter } from 'next/router'
import { navigation } from '~/data/nav'

export default function CommandPalette({ navigation }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 't' && (event.shiftKey || event.altKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen])

  const filterednavigation = query
    ? navigation.pages.filter((page) =>
        page.name.toLowerCase().includes(query.toLocaleLowerCase())
      )
    : []
  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 bg-zinc-600 p-4 pt-[25vh] overflow-y-auto"
      >
        <Transition.Child 
          enter='duration-300 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >

        <Dialog.Overlay className="fixed inset-0 bg-zinc-500/75 " />
        </Transition.Child>
        <Transition.Child 
          enter='duration-300 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
        <Combobox
          value=""
          onChange={(page: any) => {
            setIsOpen(false)
            router.push(`${page.href}`)
          }}
          as="div"
          className="relative dark:bg-zinc-800 bg-zinc-200 max-w-xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-300 overflow-hidden"
        >
          <div className="flex items-center px-4">
            <SearchIcon className="h-6 w-6 text-gray-500" />
            <Combobox.Input
              onChange={(event) => {
                setQuery(event.target.value)
              }}
              className="w-full border-0 bg-transparent text-sm focus:ring-0 text-gray-800 placeholder-gray-400 h-12"
              placeholder="Search..."
            />
          </div>
          {filterednavigation.length > 0 && (
            <Combobox.Options
              static
              className="py-4 text-sm max-h-30 overflow-y-auto"
            >
              {filterednavigation.map((page) => (
                <Combobox.Option key={page.name} value={page}>
                  {({ active }) => (
                    <div
                      className={`px-4 py-2 space-x-1 ${
                        active ? 'bg-indigo-400' : 'bg-zinc-200'
                      }`}
                    >
                      <span
                        className={`font-medium  ${
                          active
                            ? 'text-neutral-900 dark:text-neutral-200'
                            : 'text-neutral-900 dark:text-neutral-200'
                        }`}
                      >
                        {page.name}
                      </span>
                      <span
                        className={`  ${
                          active
                            ? 'text-neutral-700 dark:text-neutral-600'
                            : 'text-neutral-500 dark:text-neutral-800'
                        }`}
                      >
                        {page.repo}
                      </span>
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
          {query && filterednavigation.length === 0 && (
            <p className="p-4 text-sm text-gray-500">no results found</p>
          )}
        </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
