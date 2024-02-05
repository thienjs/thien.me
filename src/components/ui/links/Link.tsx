import NextLink from 'next/link'
import { useRouter } from 'next/router'

export function Link({
  href,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}) {
  const router = useRouter()

  let currentClassName = className
  let isActive = router.pathname === href
  if (isActive) {
    currentClassName += ` ${activeClassName}`
  } else {
    currentClassName += ` ${inactiveClassName}`
  }

  return (
    <NextLink href={href} {...rest}>
      <p className={currentClassName}>{children({ isActive })}</p>
    </NextLink>
  )
}
