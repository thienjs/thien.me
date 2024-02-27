import Image from 'next/image'
import React from 'react'

import data from '~/data/data.json'
import Link from 'next/link'
import GithubIcon from '~/components/icons/social-icons/github'
import DiscordIcon from '~/components/icons/social-icons/discord'
import TwitterIcon from '~/components/icons/social-icons/twitter'
import LinkedinIcon from '~/components/icons/social-icons/linkedin'
import EmailIcon from '~/components/icons/social-icons/email'
import { SiBuymeacoffee } from 'react-icons/si'

import { navigation } from '~/data/nav'
import UnstyledLink from './links/UnstyledLink'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'
import { useThemeContext } from '~/hooks/useTheme';

const Footer = () => {
  const year = new Date().getFullYear()
  const { systemTheme, setTheme } = useThemeContext();
  const router = useRouter()
  return (
    <div className="mt-32 mb-18 w-full max-w-sm md:max-w-2xl">
      <div className="flex flex-row  justify-between font-mono">
        <div className=" " style={{ color: systemTheme.text.accent2 }}>
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
