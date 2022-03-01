/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  ArchiveIcon,
  AvatarIcon,
  BackpackIcon,
  BlendingModeIcon,
  BookmarkIcon,
  ChatBubbleIcon,
  CodeIcon,
  Cross1Icon,
  CubeIcon,
  DiscIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GitHubLogoIcon,
  Half2Icon,
  HamburgerMenuIcon,
  HomeIcon,
  IdCardIcon,
  LightningBoltIcon,
  NotionLogoIcon,
  Pencil1Icon,
  PersonIcon,
  RocketIcon,
  SpeakerLoudIcon,
  StopwatchIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Fragment, useState } from 'react'
import { MdDriveFileMoveOutline } from 'react-icons/md'

import classNames from '~/lib/classNames'

import AuthButton from '../auth/AuthButton'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button className=" mx-1 h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-300 p-2 ring-neutral-400 transition duration-200 ease-in-out hover:bg-zinc-300 hover:ring-2 dark:bg-zinc-700 dark:hover:bg-zinc-800">
          {isOpen ? (
            <Cross1Icon className="h-4 w-4" />
          ) : (
            <HamburgerMenuIcon className="h-4 w-4" />
          )}
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
        afterEnter={toggleIcon}
        afterLeave={toggleIcon}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
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
                <Link href="/blog">
                  <a
                    className={classNames(
                      active
                        ? 'bg-gray-200 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <Pencil1Icon className="mr-4 mt-0.5" /> Blog
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/about">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <IdCardIcon className="mr-4 mt-0.5" /> About
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/snippets">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
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
                <Link href="/projects">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BackpackIcon className="mr-4 mt-0.5" /> Projects
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/guestbook">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <ChatBubbleIcon className="mr-4 mt-0.5" /> Guestbook
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/now">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <DiscIcon className="mr-4 mt-0.5" /> Now
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/bookmarks">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BookmarkIcon className="mr-4 mt-0.5" /> Bookmarks
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/quotes">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <Half2Icon className="mr-4 mt-0.5" /> Quotes
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/todo">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <RocketIcon className="mr-4 mt-0.5" /> Todo
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link href="/stats">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <LightningBoltIcon className="mr-4 mt-0.5" /> Stats
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      {session ? (
                        <>
                          <div className="mr-2 flex flex-row items-center">
                            {session.user?.image ? (
                              <img
                                className="h-6 w-6 rounded-full"
                                src={session.user.image}
                                alt=""
                              />
                            ) : (
                              ''
                            )}
                          </div>
                          <div className="" onClick={() => signOut()}>
                            Sign Out
                          </div>
                        </>
                      ) : (
                        <>
                          <PersonIcon className="mt-0.5" />
                          <div className="ml-4" onClick={() => signIn()}>
                            Sign In
                          </div>
                        </>
                      )}
                    </div>
                  </a>
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
