import { useRouter } from 'next/router'
import * as React from 'react'
import { Plus } from 'react-feather'


import { GhostButton } from '~/components/Button'
import {
  AMAIcon,
  AppDissectionIcon,
  BookmarksIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GitHubIcon,
  HackerNewsIcon,
  HomeIcon,
  PodcastIcon,
  SecurityChecklistIcon,
  StackIcon,
  StaffDesignIcon,
  TwitterIcon,
  WritingIcon,
} from '~/components/Icon'


import { NavigationLink } from './NavigationLink'

export function SidebarNavigation() {
  const router = useRouter()

  const links = [
    {
      href: '/',
      label: 'Home',
      icon: HomeIcon,
      trailingAccessory: null,
      isActive: router.asPath === '/',
      trailingAction: null,
      isExternal: false,
    },

    {
      href: '/blog',
      label: 'Blog',
      icon: WritingIcon,
      trailingAccessory: null,
      isActive: router.asPath.indexOf('/writing') >= 0,
      trailingAction: null,
      isExternal: false,
    },
    {
      href: '/bookmarks',
      label: 'Bookmarks',
      icon: BookmarksIcon,
      trailingAccessory: null,
      isActive: router.asPath.indexOf('/bookmarks') >= 0,
      isExternal: false,
    },
    {
      href: '/feedback',
      label: 'Feedback',
      icon: AMAIcon,
      trailingAccessory: null,
      isActive:
        router.asPath.indexOf('/ama') >= 0 &&
        !router.asPath.startsWith('/ama/pending'),
      trailingAction: null,
      isExternal: false,
    },

    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: StackIcon,
      trailingAccessory: null,
      isActive: router.asPath.indexOf('/stack') >= 0,
      trailingAction: null,
      isExternal: false,
    },


    {
      href: '/music',
      label: 'Music',
      icon: PodcastIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true,
    },

    'Online',

    {
      href: 'https://twitter.com/thien_js',
      label: 'Twitter',
      icon: TwitterIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true,
    },

    {
      href: 'https://github.com/thienjs',
      label: 'GitHub',
      icon: GitHubIcon,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      trailingAction: null,
      isExternal: true,
    },
  ]

  return (
    <ul className="flex-1 px-3 py-3 space-y-1">
      {links.map((link, i) => {
        if (typeof link === 'string') {
          return (
            <li
              key={i}
              className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 dark:text-white text-opacity-40"
            >
              {link}
            </li>
          )
        }

        return <NavigationLink key={i} link={link} />
      })}
    </ul>
  )
}
