import * as React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import CommandPalette from '~/components/features/command-palette/CommandPalette'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { navigation } from '~/data/nav'
import ThemeSwitch from './ThemeSwitch'
import DropMenu from './DropMenu'
import AuthButton from '../auth/AuthButton'
import { TBoxIcon } from '../icons/t-box'
import SheetMenu from './SheetMenu'
import { DrawerMenu } from './DrawerMenu'
import { CommandIcon } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import { ScrollArea } from '~/components/ui/scroll-area'
export default function Nav() {
  const { pathname } = useRouter()
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [isOpen, setisOpen] = React.useState()
  return (
    <nav className="mt-4 flex  w-full   flex-col pb-4 pt-2  ">
      <div className="flex flex-row justify-between ">
        <Link href="/">
          <TBoxIcon className="ml-2 mr-auto h-8 w-8 cursor-pointer" />
        </Link>

        <AnimateSharedLayout>
          <motion.ul
            className="flex gap-y-1 font-serif text-sm  dark:text-gray-300 md:gap-x-4 "
            onHoverEnd={() => setActiveIndex(null)}
          >
            {navigation.navData.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <motion.li
                  key={index}
                  onHoverStart={() => setActiveIndex(index)}
                >
                  <Link legacyBehavior href={item.path}>
                    <a
                      className={classnames(
                        'relative block px-2 py-2',
                        ['text-gray-600 hover:text-gray-700'],
                        ['dark:text-gray-300 dark:hover:text-white']
                      )}
                      aria-current={pathname === item.path ? 'page' : null}
                    >
                      <span
                        className={`relative z-50 ${
                          pathname === item.path
                            ? 'font-semibold  text-gray-900 underline decoration-cyan-500 decoration-2 underline-offset-1 dark:text-gray-300 '
                            : 'font-normal text-gray-700 dark:text-gray-400'
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
                            'pointer-events-none absolute inset-0 z-0 rounded-md',
                            ['bg-zinc-300'],
                            ['dark:bg-zinc-800']
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
          {/*

          <DropMenu />
            <DrawerMenu />
          */}
          <div className="lg:hidden"></div>
          <span className="hidden lg:block">
            <CommandPalette navigation={navigation} />
          </span>
          <Drawer >
            <DrawerTrigger className="ring-0 mx-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-300 p-2 ring-neutral-400 transition duration-200 ease-in-out hover:bg-zinc-300 hover:ring-2 dark:bg-zinc-700 dark:hover:bg-zinc-800  ">
              <CommandIcon className="" />
            </DrawerTrigger>
            <DrawerContent className="ring-0 fixed bottom-0 left-0 right-0  flex h-[70%] flex-col rounded-t-lg border-none bg-gray-100 dark:bg-zinc-800">
              <div className="mx-auto mb-6 h-1 w-16 shrink-0 rounded-full bg-zinc-300" />
              <ScrollArea className="h-60% flex flex-col">
                <AnimateSharedLayout>
                  <motion.ul
                    className="flex flex-col gap-y-1 font-serif text-sm  dark:text-gray-300 md:gap-x-4 "
                    onHoverEnd={() => setActiveIndex(null)}
                  >
                    {navigation.pages.map((item, index) => {
                      const isActive = activeIndex === index
                      return (
                        <motion.li
                        className='px-6 text-xl font-sans font-semibold '
                          key={index}
                          onHoverStart={() => setActiveIndex(index)}
                        >
                          <Link href={item.href}>
                            <div
                              className={classnames(
                                'relative block px-2 py-1',
                                ['text-gray-600 hover:text-gray-700'],
                                ['dark:text-gray-300 dark:hover:text-white']
                              )}
                              aria-current={
                                pathname === item.href ? 'page' : null
                              }
                            >
                              <span
                                className={`relative z-50 ${
                                  pathname === item.href
                                    ? 'font-semibold  text-gray-900 underline decoration-cyan-500 decoration-2 underline-offset-1 dark:text-gray-300 '
                                    : 'font-normal text-gray-700 dark:text-gray-400'
                                }`}
                              >
                                {item.name}
                              </span>
                              {isActive && (
                                <motion.span
                                  layoutId="shadow"
                                  transition={{
                                    duration: 0.2,
                                  }}
                                  className={classnames(
                                    'pointer-events-none absolute inset-0 z-0 rounded-md',
                                    ['bg-zinc-300'],
                                    ['dark:bg-zinc-900']
                                  )}
                                />
                              )}
                            </div>
                          </Link>
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </AnimateSharedLayout>
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  )
}
