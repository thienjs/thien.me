/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from '~/lib/classNames'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  StopwatchIcon,
  PersonIcon,
  LightningBoltIcon,
  Half2Icon,
  HamburgerMenuIcon,
  Cross1Icon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  RocketIcon,
  ArchiveIcon,
  FaceIcon,
  AvatarIcon,
  BlendingModeIcon,
  SpeakerLoudIcon,
  CubeIcon,
  BookmarkIcon,
} from '@radix-ui/react-icons'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button>
          <button className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-2 py-2 bg-white dark:bg-zinc-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <PersonIcon className="mr-4 mt-0.5" /> About
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <ArchiveIcon className="mr-4 mt-0.5" /> Projects
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/hello">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BlendingModeIcon className="mr-4 mt-0.5" />
                      Hello
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/snake">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <CubeIcon className="mr-4 mt-0.5" /> Snake
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/music">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <SpeakerLoudIcon className="mr-4 mt-0.5" /> Music
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/pomodoro">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <StopwatchIcon className="mr-4 mt-0.5" /> Pomodoro
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <FaceIcon className="mr-4 mt-0.5" />
                      todo
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/guestbook">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
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
                <Link href="/bookmark">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BookmarkIcon className="mr-4 mt-0.5" /> Bookmark
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BookmarkIcon className="mr-4 mt-0.5" /> profile
                    </div>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/welcome">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <BookmarkIcon className="mr-4 mt-0.5" />
                      welcome
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
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
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
                <Link href="/auth">
                  <a
                    className={classNames(
                      active
                        ? 'bg-green-100 text-red-900 dark:bg-cyan-600 dark:text-gray-300'
                        : 'text-zinc-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className="flex flex-row">
                      <AvatarIcon className="mr-4 mt-0.5" /> Sign In
                    </div>
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
