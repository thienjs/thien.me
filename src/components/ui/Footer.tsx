import Image from "next/image";
import React from "react";

import data from "~/data/data.json";
import Link from 'next/link'
import GithubIcon from "~/components/icons/social-icons/github";
import DiscordIcon from "~/components/icons/social-icons/discord";
import TwitterIcon from "~/components/icons/social-icons/twitter";
import LinkedinIcon from "~/components/icons/social-icons/linkedin";
import EmailIcon from "~/components/icons/social-icons/email";
import { SiBuymeacoffee } from 'react-icons/si'

import { navigation } from '~/data/nav'
import UnstyledLink from './links/UnstyledLink'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
  const year = new Date().getFullYear()
  const router = useRouter()
  return (
    <div className="w-full mt-20 max-w-sm md:max-w-md lg:max-w-lg mb-6">
      <div className="flex flex-row  justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-500 font-serif mr-auto">
          © Thien {year}
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
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Footer

function FooterLinks() {
  return (
    <div className="flex flex-row gap-y-4 gap-x-4 justify-center mb-4 ">
      {navigation.footerLinks.map(({ href, name }) => (
        <UnstyledLink
          key={href}
          className="animated-underline text-sm font-medium rounded-sm dark:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-cyan-300"
          href={href}
        >
          {name}
        </UnstyledLink>
      ))}
    </div>
  )
}

