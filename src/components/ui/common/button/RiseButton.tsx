import * as React from 'react'
import Link from 'next/link'

export interface IButtonProps {
  label: string
  href: string
}

export default function RiseButton({ label, href }: IButtonProps) {
  return (
    <Link href={href}>
      <a className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-cyan-500 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
        <span className="relative font-semibold hover:text-gray-800">
          {label}
        </span>
      </a>
    </Link>
  )
}
