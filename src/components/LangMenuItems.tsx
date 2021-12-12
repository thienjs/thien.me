import { Menu } from '@headlessui/react';

import LangMenuItem from './LangMenuItem';

type Props = {
  open: boolean;
};

const LangMenuItems: React.FC<Props> = ({ open }: Props) => {
  return (
    <>
      {open && (
        <Menu.Items
          static
          className="absolute right-0 w-28 mt-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg outline-none z-10"
        >
          <div className="py-1">
            <LangMenuItem lang="en" text="English" />
            <LangMenuItem lang="ja" text="Japanese" />
          </div>
        </Menu.Items>
      )}
    </>
  );
};

export default LangMenuItems;
