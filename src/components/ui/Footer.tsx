import Image from "next/image";
import React from "react";
import ContactButtons from "~/components/ContactButtons";
import data from "~/data/data.json";
import Link from 'next/link'
import GithubIcon from "../icons/social-icons/github";
import DiscordIcon from "../icons/social-icons/discord";
import TwitterIcon from "../icons/social-icons/twitter";
import LinkedinIcon from "../icons/social-icons/linkedin";
import EmailIcon from "../icons/social-icons/email";


const Footer = () => {
  return (
    <div
      className="flex flex-col items-center z-50 justify-center w-screen mt-20 -ml-6 md:ml-0"
    >
      <div className="flex flex-wrap items-center justify-center mx-auto pb-10 text-gray-600 dark:text-gray-400">
        <Link href=''><GithubIcon className= 'h-8 w-8 mx-3'/></Link>
        <Link href=''><DiscordIcon className='h-8 w-8 mx-3'/></Link>
        <Link href=''><TwitterIcon className='h-8 w-8 mx-3'/></Link>
        <Link href=''><EmailIcon className='h-8 w-8 mx-3'/></Link>
        <Link href=''><LinkedinIcon className='h-8 w-8 mx-3'/></Link>
      </div>
    </div>
  );
};

export default Footer;
