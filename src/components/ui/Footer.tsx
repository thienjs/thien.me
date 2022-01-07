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
import DiscordStatus from '../DiscordStatus'
import NowPlaying from '../music/NowPlaying'
import { navigation } from '~/data/nav'
import UnstyledLink from '../links/UnstyledLink'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-20 -ml-6 md:ml-0">
      <div className="flex flex-row"></div>
      <FooterLinks />
      <div className="flex flex-col items-center  justify-center w-screen -ml-6 md:ml-0">
        <div className="flex flex-wrap items-center justify-center mx-auto mb-4 mt-1 ">
          <Link href="https://github.com/thienjs">
            <GithubIcon className="h-8 w-8 mx-3" />
          </Link>
          <Link href="https://discord.com/thien#4420">
            <DiscordIcon className="h-8 w-8 mx-3" />
          </Link>
          <Link href="https://twitter.com/thientsx">
            <TwitterIcon className="h-8 w-8 mx-3" />
          </Link>
          <Link href="emailto:hi@thien.me">
            <EmailIcon className="h-8 w-8 mx-3" />
          </Link>
          <Link href="https://linkedin.com/thienjs">
            <LinkedinIcon className="h-8 w-8 mx-3" />
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
    <div className="flex flex-row gap-y-4 gap-x-4 justify-center mb-4 max-w-sm">
      {navigation.footerLinks.map(({ href, name }) => (
        <UnstyledLink
          key={href}
          className="animated-underline text-sm font-medium rounded-sm dark:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
          href={href}
        >
          {name}
        </UnstyledLink>
      ))}
    </div>
  )
}

