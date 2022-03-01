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
  const isActive = router.pathname === href
  if (isActive) {
    currentClassName += ` ${activeClassName}`
  } else {
    currentClassName += ` ${inactiveClassName}`
  }

  return (
    <NextLink href={href} {...rest}>
      <a className={currentClassName}>{children({ isActive })}</a>
    </NextLink>
  )
}
