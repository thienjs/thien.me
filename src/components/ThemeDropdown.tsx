import { useDropdown } from '~/hooks/useDropdown';
import { useThemeContext } from '~/hooks/useTheme';

import { theme } from '~/utils/theme';

const ThemeDropdown = () => {
  const { dropdownRef, isOpen, toggleDropdown } = useDropdown();
  const { systemTheme, setTheme } = useThemeContext();

  return (
    <>
      <div className='flex rounded-md font-mono'>
        <div className='relative' ref={dropdownRef}>
          <button
            type='button'
            className={`inline-flex h-full items-center justify-center rounded-md border-0 px-2 outline-0`}
            style={{
              backgroundColor: systemTheme.background.secondary,
              border: systemTheme.text.primary,
            }}
            onClick={() => toggleDropdown()}
          >
            <div className='flex items-center gap-2 px-1'>
              <div
                style={{ backgroundColor: systemTheme.background.primary }}
                className={`aspect-square w-3 rounded-full`}
              ></div>

            </div>

          </button>

          <div
            className='absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md shadow-lg'
            style={{
              backgroundColor: systemTheme.background.secondary,
              border: ` ${systemTheme.text.primary}`,
              display: isOpen ? 'block' : 'none',
            }}
          >
            <ul
              className={`divide-y divide-slate-400`}
              style={{ color: systemTheme.text.secondary }}
            >
              {Object.keys(theme).map((key) => (
                <li
                  key={key}
                  className='flex cursor-pointer items-center justify-between p-3 text-sm'
                  onClick={() => {
                    setTheme(theme[key as keyof typeof theme]);
                  }}
                >
                  <span>{theme[key as keyof typeof theme].name}</span>
                  <div className='flex items-center gap-2'>
                    <div
                      style={{
                        backgroundColor:
                          theme[key as keyof typeof theme].background.primary,
                      }}
                      className={`aspect-square w-3 rounded-full`}
                    ></div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeDropdown;
