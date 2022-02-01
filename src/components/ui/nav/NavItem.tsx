import * as React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import NextLink from 'next/link';
import * as Toolbar from '@radix-ui/react-toolbar';
export interface INavItemProps {
  href: string;
  text: string;
}

export function NavItem({ href, text }: INavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink passHref href={href}>
      <Toolbar.Link
        className={clsx(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden rounded-lg p-1 transition duration-100 ease-in hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize">{text}</span>
      </Toolbar.Link>
    </NextLink>
  );
}