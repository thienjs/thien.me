import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';

import NextLink from './NextLink';

type Props = {
  lang: string | undefined;
  text: string;
};

const menuItemCss = {
  activeTrue: 'bg-gray-100 dark:bg-green-500 text-gray-900 dark:text-gray-100',
  activeFalse: 'text-gray-700 dark:text-gray-300',
  common:
    'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none cursor-pointer',
};

const LangMenuItem: React.FC<Props> = ({ lang, text }: Props) => {
  const router = useRouter();
  const slug = router.query.slug;
  const asPath = router.asPath;

  return (
    <>
      {slug ? (
        <Menu.Item>
          {({ active }) => (
            <span
              className={`${
                active ? menuItemCss.activeTrue : menuItemCss.activeFalse
              } ${menuItemCss.common}`}
              onClick={() => {
                router.push(
                  {
                    pathname: asPath,
                  },
                  {
                    pathname: asPath,
                  },
                  { locale: lang }
                );
              }}
            >
              {text}
            </span>
          )}
        </Menu.Item>
      ) : (
        <Menu.Item>
          {({ active }) => (
            <NextLink
              href={asPath}
              locale={lang}
              className={`${
                active ? menuItemCss.activeTrue : menuItemCss.activeFalse
              } ${menuItemCss.common}`}
            >
              {text}
            </NextLink>
          )}
        </Menu.Item>
      )}
    </>
  );
};

export default LangMenuItem;
