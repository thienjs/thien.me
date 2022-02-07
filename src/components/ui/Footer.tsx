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

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-40 ">
      <div className="flex flex-row"></div>
      <FooterLinks />
      <div className="flex flex-col items-center  justify-center w-screen ">
        <div className="flex flex-wrap items-center justify-center mx-auto mb-4 mt-1 text-gray-700 dark:text-gray-400 ">
          <a href="https://github.com/thienjs" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5 mx-3 hover:text-purple-400" />
          </a>
          <a href="https://discord.com/thien#0601 " rel="noopener noreferrer">
            <DiscordIcon className="h-5 w-5 mx-3 hover:text-blue-400" />
          </a>
          <a href="https://twitter.com/thientsx" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5 mx-3 hover:text-cyan-400" />
          </a>
          <a href="emailto:thienjsx@gmail.com" rel="noopener noreferrer">
            <EmailIcon className="h-5 w-5 mx-3 hover:text-emerald-400" />
          </a>
          <a href="https://linkedin.com/in/thienjs" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5 mx-3 hover:text-blue-400" />
          </a>
          <a href="https://www.buymeacoffee.com/thien" rel="noopener noreferrer">
            <SiBuymeacoffee className="h-4 w-4 mx-3 hover:text-yellow-400" />
          </a>
        </div>
      </div>
      <div className="mb-8 text-xs text-gray-600 dark:text-gray-500">
        © Thien Tran {year}
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

