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
import ThemeDropdown from '../ThemeDropdown'
import { useThemeContext } from '~/hooks/useTheme'
import { ScrollArea } from '~/components/ui/scroll-area'
export default function Nav() {
  const { systemTheme, setTheme } = useThemeContext()
  const { pathname } = useRouter()
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [isOpen, setisOpen] = React.useState()
  return (
    <nav className="mt-4 flex  w-full   flex-col pb-4 pt-2 ">
      <div className="flex flex-row justify-between  ">
        <Link href="/">
          <TBoxIcon className="ml-2 mr-auto h-8 w-8 cursor-pointer" />
        </Link>
        {/* 

        <AnimateSharedLayout>
          <motion.ul
            className="flex gap-y-1 font-serif text-sm  dark:text-gray-300 md:gap-x-4  "
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
                      style={{ color: systemTheme.text.primary }}
                      aria-current={pathname === item.path ? 'page' : null}
                    >
                      <span
                        className={`relative z-50 ${
                          pathname === item.path
                            ? 'font-semibold  text-gray-900 border-2 px-2 py-1  '
                            : 'font-normal '
                        }`}
                        style={{
                          color: systemTheme.text.secondary,
                          borderColor: systemTheme.text.accent,
                        }}
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
                            'pointer-events-none absolute inset-0 z-0 rounded-md ',
                            ['bg-zinc-300'],
                            ['dark:bg-zinc-800']
                          )}
                          style={{
                            backgroundColor: systemTheme.background.secondary,
                          }}
                        />
                      )}
                    </a>
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        </AnimateSharedLayout>
*/}

        <div className="flex ">
          {/*

<ThemeSwitch />
          <DropMenu />
            <DrawerMenu />
          */}
          <div className="lg:hidden"></div>
          <ThemeDropdown />
          <span className="hidden lg:block">
            <CommandPalette navigation={navigation} />
          </span>
          <Drawer>
            <DrawerTrigger
              className="mx-1 flex cursor-pointer items-center justify-center rounded-md px-1.5  ring-0 transition duration-200 ease-in-out lg:hidden"
              style={{
                backgroundColor: systemTheme.background.primary,
                border: systemTheme.text.primary,
              }}
            >
              <CommandIcon className="" />
            </DrawerTrigger>
            <DrawerContent
              className="fixed bottom-0 left-0 right-0 flex  h-[70%] flex-col rounded-t-lg border-none ring-0"
              style={{
                backgroundColor: systemTheme.background.primary,
                color: systemTheme.text.primary,
              }}
            >
              <div
                className="mx-auto mb-6 h-1 w-16 shrink-0 rounded-full bg-zinc-300"
                style={{
                  backgroundColor: systemTheme.text.secondary,
                }}
              />
              <ScrollArea
                className="h-60% flex flex-col"
                style={{
                  backgroundColor: systemTheme.background.primary,
                }}
              >
                <AnimateSharedLayout>
                  <motion.ul
                    className="flex flex-col gap-y-1 font-serif text-sm  md:gap-x-4 "
                    style={{
                      backgroundColor: systemTheme.background.primary,
                      border: systemTheme.text.primary,
                    }}
                    onHoverEnd={() => setActiveIndex(null)}
                  >
                    {navigation.pages.map((item, index) => {
                      const isActive = activeIndex === index
                      return (
                        <motion.li
                          className="px-6 font-sans text-xl font-semibold "
                          style={{
                            backgroundColor: systemTheme.background.primary,
                            color: systemTheme.text.primary,
                          }}
                          key={index}
                          onHoverStart={() => setActiveIndex(index)}
                        >
                          <Link href={item.href}>
                            <div
                              className={classnames(
                                'relative block px-2 py-1',
                                [' '],
                                [' ']
                              )}
                              aria-current={
                                pathname === item.href ? 'page' : null
                              }
                              style={{}}
                            >
                              <span
                                style={{
                                  color: systemTheme.text.primary,
                                }}
                                className={`relative z-50 ${
                                  pathname === item.href
                                    ? 'font-semibold   underline decoration-cyan-500 decoration-2 underline-offset-1 '
                                    : 'font-normal'
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
                                    'pointer-events-none absolute inset-0 z-0 rounded-md'
                                  )}
                                  style={{
                                    backgroundColor:
                                      systemTheme.background.secondary,
                                  }}
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
