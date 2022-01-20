import Image from "next/image";
import React from "react";
import ContactButtons from "~/components/ContactButtons";
import data from "~/data/data.json";
import Link from 'next/link'
import GithubIcon from "~/components/icons/social-icons/github";
import DiscordIcon from "~/components/icons/social-icons/discord";
import TwitterIcon from "~/components/icons/social-icons/twitter";
import LinkedinIcon from "~/components/icons/social-icons/linkedin";
import EmailIcon from "~/components/icons/social-icons/email";

import { navigation } from '~/data/nav'
import UnstyledLink from '../links/UnstyledLink'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-20 ">
      <div className="flex flex-row"></div>
      <FooterLinks />
      <div className="flex flex-col items-center  justify-center w-screen ">
        <div className="flex flex-wrap items-center justify-center mx-auto mb-4 mt-1 text-gray-600 dark:text-gray-400 ">
          <Link href="https://github.com/thienjs">
            <GithubIcon className="h-5 w-5 mx-3 hover:text-purple-400" />
          </Link>
          <Link href="https://discord.com/thien#4420">
            <DiscordIcon className="h-5 w-5 mx-3 hover:text-blue-400" />
          </Link>
          <Link href="https://twitter.com/thientsx">
            <TwitterIcon className="h-5 w-5 mx-3 hover:text-cyan-400" />
          </Link>
          <Link href="emailto:hi@thien.me">
            <EmailIcon className="h-5 w-5 mx-3 hover:text-emerald-400" />
          </Link>
          <Link href="https://linkedin.com/thienjs">
            <LinkedinIcon className="h-5 w-5 mx-3 hover:text-blue-400" />
          </Link>
        </div>
      </div>
      <div className="mb-8 text-sm">© Thien Tran {year}</div>
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

