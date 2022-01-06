import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import {
  CaretRightIcon,
  CheckIcon,
  CropIcon,
  EyeClosedIcon,
  DotsHorizontalIcon,
  EyeOpenIcon,
  FileIcon,
  FrameIcon,
  GridIcon,
  Link2Icon,
  MixerHorizontalIcon,
  PersonIcon,
  TransparencyGridIcon,
} from '@radix-ui/react-icons'
import cx from 'classnames'
import React, { ReactNode, useState } from 'react'
import Button from './shared/Button'
import Link from 'next/link'

interface RadixMenuItem {
  label: string
  shortcut?: string
  icon?: ReactNode
  href?: string
}

interface Social {
  name: string
  url?: string
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: 'Home',
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/',
  },
  {
    label: 'Blog',
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/',
  },
  {
    label: 'Snippets',
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/',
  },
  {
    label: 'About',
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/',
  },
  {
    label: 'Feedback',
    icon: <FileIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/feedback',
  },
  {
    label: 'Dashboard',
    icon: <MixerHorizontalIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/dashbord',
  },
  {
    label: 'Dashboard',
    icon: <MixerHorizontalIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/dashbord',
  },
]

const extraMenuItems: RadixMenuItem[] = [
  {
    label: 'Todo',
    icon: <FrameIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/todo',
  },
  {
    label: 'Pomodoro',
    icon: <CropIcon className="w-3.5 h-3.5 mr-2" />,
    shortcut: '',
    href: '/dashbord',
  },
]

const socials: Social[] = [
  {
    name: 'github',
    url: 'https://github.com/thienjs.png',
  },
  {
    name: 'twitter',
    url: 'https://github.com/thienjs.png',
  },
  {
    name: 'discord',
    url: 'https://github.com/thienjs.png',
  },
]

interface Props {}

const DropdownMenu = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const [showUi, setShowUi] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <Button>
            <DotsHorizontalIcon />
          </Button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={cx(
            'w-48 md:w-56 px-1.5 py-1 rounded-lg shadow-md',
            'bg-gray-100 dark:bg-zinc-800'
          )}
        >
          {generalMenuItems.map(({ label, icon, shortcut, href }, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}
            >
              <Link href={href}>
                <a className="flex flex-row">
                  {icon}
                  <span className=" text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                  {shortcut && <span className="text-xs">{shortcut}</span>}
                </a>
              </Link>
            </DropdownMenuPrimitive.Item>
          ))}

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuPrimitive.CheckboxItem
            checked={showGrid}
            onCheckedChange={setShowGrid}
            className={cx(
              'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
              'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
            )}
          >
            {showGrid ? (
              <GridIcon className="w-4 h-4 mr-2" />
            ) : (
              <TransparencyGridIcon className="w-3.5 h-3.5 mr-2 text-gray-700 dark:text-gray-300" />
            )}
            <span className="flex-grow text-gray-700 dark:text-gray-300">
              Toggles
            </span>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.ItemIndicator>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.CheckboxItem
            checked={showUi}
            onCheckedChange={setShowUi}
            className={cx(
              'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
              'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
            )}
          >
            {showUi ? (
              <EyeOpenIcon className="w-3.5 h-3.5 mr-2" />
            ) : (
              <EyeClosedIcon className="w-3.5 h-3.5 mr-2" />
            )}
            <span className="flex-grow text-gray-700 dark:text-gray-300">
              Hmmmmmm
            </span>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.ItemIndicator>
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuPrimitive.Label className="px-2 py-2 text-xs text-gray-700 select-none dark:text-gray-200">
            Extras
          </DropdownMenuPrimitive.Label>

          {extraMenuItems.map(({ label, icon, shortcut, href }, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}
            >
              <Link href={href}>
                <a className="flex flex-row">
                  {icon}
                  <span className="flex-grow text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                  {shortcut && <span className="text-xs">{shortcut}</span>}
                </a>
              </Link>
            </DropdownMenuPrimitive.Item>
          ))}

          <DropdownMenuPrimitive.Separator className="h-px my-1 bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.TriggerItem
              className={cx(
                'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}
            >
              <Link2Icon className="w-3.5 h-3.5 mr-2" />
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                Social
              </span>
              <CaretRightIcon className="w-3.5 h-3.5" />
            </DropdownMenuPrimitive.TriggerItem>
            <DropdownMenuPrimitive.Content
              className={cx(
                'px-1 py-1 w-full text-xs rounded-md shadow-md',
                'bg-white dark:bg-gray-800'
              )}
            >
              {socials.map(({ name, url }, i) => (
                <DropdownMenuPrimitive.Item
                  key={`${name}-${i}`}
                  className={cx(
                    'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none w-28 md:w-32',
                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
                  )}
                >
                  {url ? (
                    <img className="w-6 h-6 mr-2.5 rounded-full" src={url} />
                  ) : (
                    <PersonIcon className="w-6 h-6 mr-2.5" />
                  )}
                  <span className="text-gray-700 dark:text-gray-300">
                    {name}
                  </span>
                </DropdownMenuPrimitive.Item>
              ))}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  )
}

export default DropdownMenu
