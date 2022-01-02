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

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center z-50 justify-center w-screen mt-20 -ml-6 md:ml-0">
      <div className="flex flex-row">
        <DiscordStatus />
        <NowPlaying />
      </div>
      <div className="flex flex-col items-center z-50 justify-center w-screen -ml-6 md:ml-0">
        <div className="flex flex-wrap items-center justify-center mx-auto pb-10 ">
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
      <div>
        {year}
      </div>
    </div>
  )
}

export default Footer;
