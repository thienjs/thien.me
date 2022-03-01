import * as React from 'react'

import UnstyledLink, {
  UnstyledLinkProps,
} from '~/components/ui/links/UnstyledLink'
import clsxm from '~/lib/clsxm'

export default function UnderlineLink({
  children,
  className,
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        'animated-underline text-md inline-flex items-center border-gray-200 font-semibold text-gray-700 hover:border-gray-300 dark:text-zinc-400',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-offset-2',
        '',
        className
      )}
    >
      {children}
    </UnstyledLink>
  )
}
