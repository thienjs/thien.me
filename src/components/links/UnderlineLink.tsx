import * as React from 'react';

import clsxm from '~/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '~/components/links/UnstyledLink';

export default function UnderlineLink({
  children,
  className,
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsxm(
        'animated-underline border-gray-200 hover:border-gray-300 inline-flex items-center font-semibold',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-offset-2',
        'border-black border-b border-dotted hover:border-black',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
