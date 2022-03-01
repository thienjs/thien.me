import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SiBuymeacoffee } from 'react-icons/si'

import DiscordIcon from '~/components/icons/social-icons/discord'
import EmailIcon from '~/components/icons/social-icons/email'
import GithubIcon from '~/components/icons/social-icons/github'
import LinkedinIcon from '~/components/icons/social-icons/linkedin'
import TwitterIcon from '~/components/icons/social-icons/twitter'
import data from '~/data/data.json'
import { navigation } from '~/data/nav'

import UnstyledLink from './links/UnstyledLink'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
  const year = new Date().getFullYear()
  const router = useRouter()
  return (
    <div className="mt-32 mb-12 w-full max-w-sm md:max-w-2xl">
      <div className="flex flex-row  justify-between ">
        <div className=" font-serif text-sm text-gray-600 dark:text-gray-500">
          Thien © {year}
        </div>

        {/* <div className="flex space-x-2 mt-0 text-gray-700 dark:text-gray-400 ">
          <a href="https://github.com/thienjs" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5  hover:text-purple-400" />
          </a>
          <a href="https://discord.com/thien#0601 " rel="noopener noreferrer">
            <DiscordIcon className="h-5 w-5  hover:text-blue-400" />
          </a>
          <a href="https://twitter.com/thientsx" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5  hover:text-cyan-400" />
          </a>
          <a href="mailto:hi@thien.me" rel="noopener noreferrer">
            <EmailIcon className="h-5 w-5  hover:text-emerald-400" />
          </a>
          <a href="https://linkedin.com/in/thienjs" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5  hover:text-blue-400" />
          </a>
          <a
            href="https://www.buymeacoffee.com/thien"
            rel="noopener noreferrer"
          >
            <SiBuymeacoffee className="h-4 w-4 hover:text-yellow-400" />
          </a>
  </div>*/}
      </div>
    </div>
  )
}

export default Footer

function FooterLinks() {
  return (
    <div className="mb-4 flex flex-row justify-center gap-y-4 gap-x-4 ">
      {navigation.footerLinks.map(({ href, name }) => (
        <UnstyledLink
          key={href}
          className="animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-cyan-300 dark:text-gray-300"
          href={href}
        >
          {name}
        </UnstyledLink>
      ))}
    </div>
  )
}
