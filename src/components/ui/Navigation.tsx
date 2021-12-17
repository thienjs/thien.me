
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, TerminalIcon, LightningBoltIcon, BookmarkIcon } from '@heroicons/react/outline'
import NotepadIcon from '../icons/notepad'
import SnippetsIcon from '../icons/snippets'
import QuillIcon from '~/components/icons/quill'
import PenIcon from '~/components/icons/pen'
import IpodIcon from '~/components/icons/ipod'
import CommentIcon from '../icons/comment'
import DashboardIcon from '../icons/dashboard'
import AboutIcon from '../icons/about'
import FolderHeartIcon from '../icons/folder-heart'
import JournalIcon from '~/components/icons/journal'
import CodeJournalIcon from '~/components/icons/code-journal'
import CodeIcon from '~/components/icons/code'
import BookmarkNotebookIcon from '~/components/icons/bookmark-notebook'
import ThemeSwitch from '../ThemeSwitch'
import { navigation } from '~/lib/constants'
import Logo from '~/components/icons/logo'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-dots dark:bg-dots-dark">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-dots dark:bg-dots-dark bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {/* Mobile Sidebar */}
            <div className="relative max-w-xs w-full bg-dots dark:bg-dots-dark shadow-xl pb-12 flex flex-col overflow-y-auto opacity-95">
              <div className="px-8 pt-6 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-red-400 dark:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Link href="/">
                  <h1 className="ml-3 font-semibold text-xl">thien.me</h1>
                </Link>
              </div>

              {/* Links */}
              <div className="py-6 px-6 ml-3 text-md mt-5">
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <JournalIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/blog">
                    <a className="ml-2 ">Blog</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <CodeJournalIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/snippets">
                    <a className="ml-2">Snippets</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <CommentIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/feedback">
                    <a className="ml-2">Feedback</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <DashboardIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/dashboard">
                    <a className="ml-2">dashboard</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <FolderHeartIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/projects">
                    <a className="ml-2">projects</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <IpodIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/music">
                    <a className="ml-2">music</a>
                  </Link>
                </div>
                <div className="flex flex-row mb-2 py-4 text-xl font-semibold lowercase">
                  <AboutIcon className="h-6 w-6 mr-3 mt-1" />
                  <Link href="/about">
                    <a className="ml-2">about</a>
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-dots dark:bg-dots-dark">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 mt-1"
        >
          <div className="">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white rounded-md text-gray-400 dark:text-white lg:hidden dark:bg-zinc-900 ml-4"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-3">
                <Link href="/">
                  <Logo />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800 dark:text-gray-400',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500 dark:text-green-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-dots dark:bg-dots-dark">
                                <div className="max-w-5xl mx-auto px-4 py-4">
                                  <div className="">
                                    <div className="grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href="/feedback">
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Feeback
                    </a>
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link href="/contact">
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Contact
                    </a>
                  </Link>
                </div>

                <Link href="/blog">
                  <a className=" text-gray-400 hover:text-gray-500 ml-3">
                    <JournalIcon
                      className="w-6 h-6 lg:hidden"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <Link href="/snippets">
                  <a className=" text-gray-400 hover:text-gray-500 ml-3">
                    <CodeJournalIcon
                      className="w-4 h-4 lg:hidden"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <Link href="/projects">
                  <a className=" text-gray-400 hover:text-gray-500 ml-3">
                    <FolderHeartIcon
                      className="w-6 h-6 lg:hidden"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <Link href="/feedback">
                  <a className=" text-gray-400 hover:text-gray-500 ml-3">
                    <CommentIcon
                      className="w-6 h-6 lg:hidden"
                      aria-hidden="true"
                    />
                  </a>
                </Link>

                <div className="ml-2 mt-1">
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
