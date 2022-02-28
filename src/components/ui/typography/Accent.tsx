import clsx from 'clsx'
import * as React from 'react'

type AccentType = React.ComponentPropsWithoutRef<'span'>

export function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'from-primary-300/40 to-primary-400/40 via-primary-300/40 bg-gradient-to-tr',
        'dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
      )}
    >
      {children}
    </span>
  )
}
