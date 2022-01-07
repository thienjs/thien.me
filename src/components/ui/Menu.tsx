/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { CodeIcon, HomeIcon } from '@radix-ui/react-icons'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-slate-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700 hover:bg-cyan-600 dark:hover:bg-sky-300',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <HomeIcon className="mr-4 mt-0.5" /> Home
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link href="/Snippets">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700 hover:bg-cyan-600 dark:hover:bg-sky-300',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <CodeIcon className="mr-4 mt-0.5" /> Snippets
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/Snippets">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700 hover:bg-cyan-600 dark:hover:bg-sky-300',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <CodeIcon className="mr-4 mt-0.5" /> Snippets
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/Snippets">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700 hover:bg-cyan-600 dark:hover:bg-sky-300',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <CodeIcon className="mr-4 mt-0.5" /> Snippets
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-gray-800 dark:text-gray-200 bg-slate-200 dark:bg-slate-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
