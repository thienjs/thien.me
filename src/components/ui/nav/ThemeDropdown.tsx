import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi';
import * as Toolbar from '@radix-ui/react-toolbar';
export interface IThemeDropdownProps {}

const states = [
  { name: 'light', icon: <FiSun aria-hidden className="mx-2" /> },
  { name: 'dark', icon: <FiMoon aria-hidden className="mx-2" /> },
  { name: 'system', icon: <FiMonitor aria-hidden className="mx-2" /> }
];

export function ThemeDropdown(props: IThemeDropdownProps) {
  const { theme, setTheme } = useTheme();

  const radioItems = states.map(({ name, icon }) => (
    <DropdownMenu.RadioItem
      key={name}
      className="flex cursor-pointer items-center rounded-sm py-1 pl-4 hover:bg-gray-200/50 hover:dark:bg-gray-700 "
      value={name}
    >
      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
            className="fill-red-500"
          ></path>
        </svg>
      </DropdownMenu.ItemIndicator>
      {icon} {name}
    </DropdownMenu.RadioItem>
  ));
  const onChange = (value: string) => {
    if (theme !== value) {
      setTheme(value);
    }
  };
  return (
    <DropdownMenu.Root>
      <Toolbar.Button asChild>
        <DropdownMenu.Trigger
          aria-label="Switch theme"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
        >
          <FiMoon aria-hidden className="block h-5 w-5 dark:hidden" />
          <FiSun aria-hidden className="hidden h-5 w-5 dark:block" />
        </DropdownMenu.Trigger>
      </Toolbar.Button>
      <DropdownMenu.Content
        className="w-36 overflow-hidden rounded-md bg-gray-50 p-1 text-sm font-medium shadow-lg dark:bg-gray-800"
        sideOffset={5}
      >
        <DropdownMenu.RadioGroup value={theme} onValueChange={onChange}>
          {radioItems}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}