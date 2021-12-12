import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';

import LangMenuItems from './LangMenuItems';

const LangMenu: React.FC = () => {
  const router = useRouter();
  const lang = router.locale;

  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full px-3 py-1 text-sm font-medium leading-5 text-gray-700 dark:text-gray-100 transition duration-150 ease-in-out bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-md hover:text-gray-500 dark:hover:border-gray-400 focus:outline-none">
                <span>{lang === 'ja' ? 'Japanese' : 'English'}</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <LangMenuItems open={open} />
          </>
        )}
      </Menu>
    </div>
  );
};

export default LangMenu;
