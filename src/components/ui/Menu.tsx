import { Menu } from '@headlessui/react'
import { motion } from 'framer-motion'

export default function MenuPage() {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="p-2 transition duration-150 ease-in-out rounded-full hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500 focus:outline-none">
              <p>menu</p>
            </Menu.Button>

            {open && (
              <Menu.Items
                as={motion.div}
                static
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 z-10 bg-white border rounded shadow focus:outline-none border-cool-gray-200"
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-cool-gray-200' : ''
                      } block px-5 py-3 whitespace-no-wrap`}
                      href="#"
                    >
                      Send via Direct Message
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-cool-gray-200' : ''
                      } block px-5 py-3 whitespace-no-wrap`}
                      href="#"
                    >
                      Add Tweet to Bookmarks
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-cool-gray-200' : ''
                      } block px-5 py-3 whitespace-no-wrap`}
                      href="#"
                    >
                      Copy link to Tweet
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  )
}
