import * as React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { navigation } from '~/data/nav'
import ThemeSwitch from '../ThemeSwitch'
import DropMenu from './DropMenu'
import AuthButton from '../auth/AuthButton'
import { ThemeDropdown } from './nav/ThemeDropdown'
import * as Toolbar from '@radix-ui/react-toolbar'
import { MobileNav } from './nav/MobileNav'


export default function Nav() {
  const { pathname } = useRouter()
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [isOpen, setisOpen] = React.useState()
  return (
    <nav className="flex items-center justify-between pb-4 w-full  max-w-sm md:max-w-2xl px-2 py-2">
      <MobileNav />
      <AnimateSharedLayout>
        <motion.ul
          className="flex gap-x-4 gap-y-1 dark:text-gray-300"
          onHoverEnd={() => setActiveIndex(null)}
        >
          {navigation.navData.map((item, index) => {
            const isActive = activeIndex === index
            return (
              <motion.li key={index} onHoverStart={() => setActiveIndex(index)}>
                <Link href={item.path}>
                  <a
                    className={classnames(
                      'relative block px-2 py-1',
                      ['text-gray-600 hover:text-gray-700'],
                      ['dark:text-gray-300 dark:hover:text-white']
                    )}
                    aria-current={pathname === item.path ? 'page' : null}
                  >
                    <span
                      className={`relative z-50 ${
                        pathname === item.path
                          ? 'text-gray-900  dark:text-gray-300 font-semibold underline decoration-cyan-500 underline-offset-1 decoration-2 '
                          : 'text-gray-700 dark:text-gray-400 font-normal'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="shadow"
                        transition={{
                          duration: 0.2,
                        }}
                        className={classnames(
                          'absolute inset-0 rounded-md pointer-events-none z-0',
                          ['bg-zinc-300'],
                          ['dark:bg-gray-800']
                        )}
                      />
                    )}
                  </a>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </AnimateSharedLayout>
      <div className="flex ">
        <ThemeSwitch />
        <DropMenu />
      </div>
    </nav>
  )
}