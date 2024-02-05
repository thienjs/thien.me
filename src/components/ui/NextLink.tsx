import Link from 'next/link'

type Props = {
  href: string
  locale?: string | false
  className?: string
  'aria-label'?: string
  onClick?: () => void
  children?: React.ReactNode
}

const NextLink: React.FC<Props> = ({
  href,
  locale,
  children,
  ...rest
}: Props) => {
  return (
    <Link legacyBehavior href={href} locale={locale}>
      <p {...rest}>{children}</p>
    </Link>
  )
}

export default NextLink
