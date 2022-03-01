import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter()
  const child = Children.only(children)

  const className = pathname === props.href ? 'active' : child.props.className

  return (
    <Link href={props.href} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
