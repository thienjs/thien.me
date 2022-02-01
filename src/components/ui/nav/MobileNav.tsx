import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Toolbar from '@radix-ui/react-toolbar';

import { FiHome, FiEdit3, FiStar, FiAward, FiMenu, FiX } from 'react-icons/fi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import useDelayedRender from 'use-delayed-render';
import styles from './mobile-menu.module.css';
export interface IMobileNavProps {}

const items = [
  { name: 'Home', url: '/', icon: <FiHome aria-hidden className="mx-2" /> },
  {
    name: 'Guestbook',
    url: '/guestbook',
    icon: <FiEdit3 aria-hidden className="mx-2" />,
    delay: '150ms'
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: <FiStar aria-hidden className="mx-2" />,
    delay: '175ms'
  },
  {
    name: 'NFT gallery',
    url: '/nft-gallery',
    icon: <FiAward aria-hidden className="mx-2" />,
    delay: '200ms'
  }
];

export function MobileNav(props: IMobileNavProps) {
  const router = useRouter();
  const path = router.asPath;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );
  const navItems = items.map((item) => (
    <li
      key={item.name}
      className="my-2 w-full text-base "
      style={{ transitionDelay: item.delay }}
    >
      <NextLink href={item.url}>
        <a
          className={clsx(
            'mx-4 flex w-auto items-center rounded-md py-3  transition-all',
            path === item.url
              ? 'bg-gray-200 font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-200 '
              : 'font-normal text-gray-600 dark:text-gray-400'
          )}
        >
          {item.icon} <span className="capsize">{item.name}</span>
        </a>
      </NextLink>
    </li>
  ));

  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Toolbar.Button asChild>
        <Dialog.Trigger
          aria-label="Toggle menu"
          className="flex h-9  w-9 items-center justify-center bg-transparent   md:hidden"
        >
          <FiMenu aria-hidden className="h-5 w-5 " />
        </Dialog.Trigger>
      </Toolbar.Button>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 " />
        <Dialog.Content className="fixed top-0 bottom-0 left-0 w-72">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 ">
            {isMenuMounted ? (
              <ul
                className={clsx(
                  styles.menu,
                  isMenuRendered && styles.menuRendered,
                  'mt-32 pl-5'
                )}
              >
                {navItems}
              </ul>
            ) : null}
          </div>
          <Dialog.DialogClose className="absolute top-8 left-3 ml-5 flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <FiX aria-hidden className="h-5 w-5 " />
          </Dialog.DialogClose>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}