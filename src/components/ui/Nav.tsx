import * as React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { navigation } from '~/data/nav'
import ThemeSwitch from './ThemeSwitch'
import DropMenu from './DropMenu'
import AuthButton from '../auth/AuthButton'
import { TBoxIcon } from '../icons/t-box';


export default function Nav() {
  const { pathname } = useRouter()
  const [activeIndex, setActiveIndex] = React.useState(null)
  const [isOpen, setisOpen] = React.useState()
  return (
    <nav className="flex flex-col  pb-4 w-full  max-w-sm md:max-w-2xl mt-4 pt-2">
      <div className="flex flex-row justify-between ">
        <Link href="/">
          <a>
            <TBoxIcon className="w-8 h-8 ml-2 mr-auto cursor-pointer" />
          </a>
        </Link>
        <AnimateSharedLayout>
          <motion.ul
            className="flex md:gap-x-4 gap-y-1 dark:text-gray-300  text-sm  "
            onHoverEnd={() => setActiveIndex(null)}
          >
            {navigation.navData.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <motion.li
                  key={index}
                  onHoverStart={() => setActiveIndex(index)}
                >
                  <Link href={item.path}>
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
                            ? 'text-gray-900  dark:text-gray-300 font-semibold underline decoration-cyan-500 underline-offset-4 decoration-1 '
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
          <DropMenu />
        </div>
      </div>
    </nav>
  )
}