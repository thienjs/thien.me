import * as React from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { ThemeDropdown } from './ThemeDropdown';
import { MobileNav } from './MobileNav';
import * as Toolbar from '@radix-ui/react-toolbar';
export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <Toolbar.Root>
      <div className="flex flex-col justify-center px-8">
        <nav className="relative mx-auto flex w-full max-w-7xl items-center  justify-between border-gray-200 bg-gray-50 bg-opacity-60 pt-8 pb-8  text-gray-900 dark:border-gray-700  dark:bg-gray-900 dark:text-gray-100 sm:pb-16">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <Link passHref href="/">
            <Toolbar.Link className="hidden h-11 w-11 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-3xl font-semibold md:block "></Toolbar.Link>
          </Link>
          <MobileNav />
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="blog" />
          </div>

          <ThemeDropdown />
        </nav>
      </div>
    </Toolbar.Root>
  );
}